import { RESULT_LIMIT } from '../config/matchingConfig';
import { activities } from '../data/activities';
import { matchActivities } from './matchingService';
import type { MatchCriteria, Recommendation } from '../types/domain';

/** The only place that binds the current activity source to matching logic. */
export function getRecommendations(criteria: MatchCriteria, limit = RESULT_LIMIT): Recommendation[] {
  return matchActivities(activities, criteria).slice(0, limit);
}
