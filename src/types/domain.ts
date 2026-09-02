/** Shared domain types. Keep UI-specific props out of this file. */

export type AudienceTag = 'youth' | 'senior' | 'family' | 'worker' | 'resident' | 'all-residents';

export type TopicTag =
  | 'culture'
  | 'parenting'
  | 'convenience'
  | 'health'
  | 'learning'
  | 'volunteer'
  | 'nanjing-culture';

export type TimePreference =
  | 'today-morning'
  | 'today-afternoon'
  | 'today-evening'
  | 'weekday'
  | 'weekend';

export type ScheduleTag = 'today' | 'morning' | 'afternoon' | 'evening' | 'weekday' | 'weekend';

export type ActivityStatus = 'upcoming' | 'full' | 'cancelled';

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  audience: AudienceTag[];
  topics: TopicTag[];
  tags: string[];
  scheduleTags: ScheduleTag[];
  intensity: 'relaxed' | 'moderate' | 'active';
  ageRange: string;
  status: ActivityStatus;
  capacity?: number;
  organizer?: string;
  duration?: string;
}

export interface MatchCriteria {
  audience: AudienceTag[];
  topics: TopicTag[];
  timePreferences: TimePreference[];
}

export interface ScoreBreakdown {
  audienceScore: number | null;
  topicScore: number | null;
  timeScore: number | null;
  score: number;
}

export interface Recommendation {
  activity: Activity;
  score: number;
  reasons: string[];
  breakdown: ScoreBreakdown;
}

export interface ParsedSearch {
  criteria: MatchCriteria;
  matchedKeywords: string[];
}

export interface SearchResponse {
  parsed: ParsedSearch;
  recommendations: Recommendation[];
}

export type AppRoute = 'home' | 'matching' | 'search' | 'results' | 'detail';
