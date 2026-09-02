import { createContext, useContext, useMemo, useState } from 'react';
import { searchActivities } from '../services/searchService';
import { getRecommendations } from '../services/recommendationService';
import type { AppRoute, MatchCriteria, ParsedSearch, Recommendation } from '../types/domain';

interface AppState {
  route: AppRoute;
  recommendations: Recommendation[];
  activeActivityId: string | null;
  criteria: MatchCriteria | null;
  searchQuery: string;
  parsedSearch: ParsedSearch | null;
}

interface AppContextValue extends AppState {
  navigate: (route: AppRoute) => void;
  submitQuickMatch: (criteria: MatchCriteria) => void;
  submitSearch: (query: string) => void;
  showActivity: (activityId: string) => void;
  restart: () => void;
}

const initialState: AppState = {
  route: 'home',
  recommendations: [],
  activeActivityId: null,
  criteria: null,
  searchQuery: '',
  parsedSearch: null,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  const value = useMemo<AppContextValue>(() => ({
    ...state,
    navigate: (route) => setState((current) => ({ ...current, route })),
    submitQuickMatch: (criteria) => setState({
      route: 'results',
      recommendations: getRecommendations(criteria),
      activeActivityId: null,
      criteria,
      searchQuery: '',
      parsedSearch: null,
    }),
    submitSearch: (query) => {
      const response = searchActivities(query);
      setState({
        route: 'results',
        recommendations: response.recommendations,
        activeActivityId: null,
        criteria: response.parsed.criteria,
        searchQuery: query,
        parsedSearch: response.parsed,
      });
    },
    showActivity: (activityId) => setState((current) => ({ ...current, route: 'detail', activeActivityId: activityId })),
    restart: () => setState(initialState),
  }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used inside AppProvider');
  return context;
}
