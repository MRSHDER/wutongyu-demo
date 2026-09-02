import { MATCHING_WEIGHTS } from '../config/matchingConfig';
import type { ScoreBreakdown } from '../types/domain';

interface ScoreInput {
  audienceScore: number | null;
  topicScore: number | null;
  timeScore: number | null;
}

/**
 * Combines active criteria using the central configuration. Empty criteria do
 * not penalize an activity; their weight is redistributed among active ones.
 */
export function calculateScore({ audienceScore, topicScore, timeScore }: ScoreInput): ScoreBreakdown {
  const candidates: Array<{ value: number | null; weight: number }> = [
    { value: audienceScore, weight: MATCHING_WEIGHTS.audience },
    { value: topicScore, weight: MATCHING_WEIGHTS.topics },
    { value: timeScore, weight: MATCHING_WEIGHTS.time },
  ];
  const active = candidates.filter((criterion): criterion is { value: number; weight: number } => criterion.value !== null);

  const weightTotal = active.reduce((sum, criterion) => sum + criterion.weight, 0);
  const score = weightTotal === 0
    ? 0
    : Math.round(active.reduce((sum, criterion) => sum + criterion.value * criterion.weight, 0) / weightTotal);

  return { audienceScore, topicScore, timeScore, score };
}
