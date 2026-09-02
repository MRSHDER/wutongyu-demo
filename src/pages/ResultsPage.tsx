import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { ActivityCard } from '../components/recommendation/ActivityCard';
import { useApp } from '../hooks/useApp';

export function ResultsPage() {
  const { recommendations, showActivity, rematch, goHome, navigate, searchQuery, parsedSearch } = useApp();
  const summary = searchQuery
    ? `已根据“${searchQuery}”进行本地关键词解析${parsedSearch?.matchedKeywords.length ? `：${parsedSearch.matchedKeywords.join('、')}` : ''}`
    : '已根据你选择的人群、兴趣和时间进行匹配';

  return <PageShell compact>
    <header className="page-header">
      <BackButton onClick={() => navigate(searchQuery ? 'search' : 'matching')} label="调整条件" />
      <div className="page-header__actions">
        <Button variant="quiet" onClick={rematch}>重新匹配</Button>
        <Button variant="secondary" onClick={goHome}>回到首页</Button>
      </div>
    </header>
    <section className="results-page">
      <p className="eyebrow">为你推荐</p>
      <h1>这 3 场活动可能适合你</h1>
      <p className="page-lead">{summary}</p>
      {recommendations.length > 0 ? (
        <div className="recommendation-grid">
          {recommendations.map((item) => (
            <ActivityCard key={item.activity.id} recommendation={item} onOpen={() => showActivity(item.activity.id)} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>还没有可展示的推荐结果。</p>
          <div className="page-actions">
            <Button onClick={rematch}>重新匹配</Button>
            <Button variant="secondary" onClick={goHome}>回到首页</Button>
          </div>
        </div>
      )}
    </section>
  </PageShell>;
}
