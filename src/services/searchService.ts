import { AUDIENCE_SYNONYMS, TIME_SYNONYMS, TOPIC_SYNONYMS } from '../data/synonyms';
import { findMatchedTerms } from '../utils/textParser';
import { getRecommendations } from './recommendationService';
import type { ParsedSearch, SearchResponse } from '../types/domain';

/** Extracts structured criteria from local keyword dictionaries; no network or model API is used. */
export function parseSearchQuery(query: string): ParsedSearch {
  const audience = findMatchedTerms(query, AUDIENCE_SYNONYMS);
  const topics = findMatchedTerms(query, TOPIC_SYNONYMS);
  const timePreferences = findMatchedTerms(query, TIME_SYNONYMS);

  return {
    criteria: {
      audience: audience.values,
      topics: topics.values,
      timePreferences: timePreferences.values,
    },
    matchedKeywords: [...new Set([...audience.terms, ...topics.terms, ...timePreferences.terms])],
  };
}

export function searchActivities(query: string): SearchResponse {
  const parsed = parseSearchQuery(query);
  return { parsed, recommendations: getRecommendations(parsed.criteria) };
}
