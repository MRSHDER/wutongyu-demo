import type { ScheduleTag, TimePreference } from '../types/domain';

/** Change matching weights here; components must never own these numbers. */
export const MATCHING_WEIGHTS = {
  audience: 0.4,
  topics: 0.35,
  time: 0.25,
} as const;

/** A selected time option maps to the schedule tags expected on an activity. */
export const TIME_PREFERENCE_REQUIREMENTS: Record<TimePreference, ScheduleTag[]> = {
  'today-morning': ['today', 'morning'],
  'today-afternoon': ['today', 'afternoon'],
  'today-evening': ['today', 'evening'],
  weekday: ['weekday'],
  weekend: ['weekend'],
};

export const RESULT_LIMIT = 3;
