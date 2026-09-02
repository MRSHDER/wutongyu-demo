import { TIME_PREFERENCE_REQUIREMENTS } from '../config/matchingConfig';
import { AUDIENCE_LABELS, TOPIC_LABELS } from '../data/categories';
import { calculateScore } from '../utils/scoring';
import type { Activity, MatchCriteria, Recommendation } from '../types/domain';

function scoreAudience(activity: Activity, requested: MatchCriteria['audience']): number | null {
  if (requested.length === 0) return null;

  const matches = requested.filter(
    (audience) => activity.audience.includes(audience) || activity.audience.includes('all-residents'),
  ).length;
  return Math.round((matches / requested.length) * 100);
}

function scoreTopics(activity: Activity, requested: MatchCriteria['topics']): number | null {
  if (requested.length === 0) return null;

  const matches = requested.filter((topic) => activity.topics.includes(topic)).length;
  return Math.round((matches / requested.length) * 100);
}

function scoreTime(activity: Activity, requested: MatchCriteria['timePreferences']): number | null {
  if (requested.length === 0) return null;

  const matches = requested.filter((preference) =>
    TIME_PREFERENCE_REQUIREMENTS[preference].every((tag) => activity.scheduleTags.includes(tag)),
  ).length;
  return Math.round((matches / requested.length) * 100);
}

function createReasons(activity: Activity, criteria: MatchCriteria): string[] {
  const reasons: string[] = [];
  const matchedAudience = criteria.audience.filter(
    (audience) => activity.audience.includes(audience) || activity.audience.includes('all-residents'),
  );
  const matchedTopics = criteria.topics.filter((topic) => activity.topics.includes(topic));
  const matchedTime = criteria.timePreferences.filter((preference) =>
    TIME_PREFERENCE_REQUIREMENTS[preference].every((tag) => activity.scheduleTags.includes(tag)),
  );

  if (matchedAudience.length > 0) {
    reasons.push(`适合${matchedAudience.map((item) => AUDIENCE_LABELS[item]).join('、')}参与。`);
  }
  if (matchedTopics.length > 0) {
    reasons.push(`符合你对${matchedTopics.map((item) => TOPIC_LABELS[item]).join('、')}的兴趣。`);
  }
  if (matchedTime.length > 0) {
    reasons.push('活动时间与你选择的方便时段匹配。');
  }
  if (reasons.length === 0) {
    reasons.push('这是当前活动中与已识别需求最接近的选项。');
  }

  return reasons;
}

/** Scores one activity and always returns its explanation alongside the score. */
export function matchActivity(activity: Activity, criteria: MatchCriteria): Recommendation {
  const breakdown = calculateScore({
    audienceScore: scoreAudience(activity, criteria.audience),
    topicScore: scoreTopics(activity, criteria.topics),
    timeScore: scoreTime(activity, criteria.timePreferences),
  });

  return { activity, score: breakdown.score, reasons: createReasons(activity, criteria), breakdown };
}

export function matchActivities(activities: Activity[], criteria: MatchCriteria): Recommendation[] {
  return activities
    .filter((activity) => activity.status === 'upcoming')
    .map((activity) => matchActivity(activity, criteria))
    .sort((left, right) => right.score - left.score || left.activity.title.localeCompare(right.activity.title, 'zh-CN'));
}
