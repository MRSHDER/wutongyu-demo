import { AppProvider, useAppContext } from './context/AppContext';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { HomePage } from './pages/HomePage';
import { MatchingPage } from './pages/MatchingPage';
import { ResultsPage } from './pages/ResultsPage';
import { SearchPage } from './pages/SearchPage';

function ScreenRouter() {
  const { route } = useAppContext();
  if (route === 'matching') return <MatchingPage />;
  if (route === 'search') return <SearchPage />;
  if (route === 'results') return <ResultsPage />;
  if (route === 'detail') return <ActivityDetailPage />;
  return <HomePage />;
}

export default function App() {
  return <AppProvider><ScreenRouter /></AppProvider>;
}
