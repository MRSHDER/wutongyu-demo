import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { ActivityCard } from '../components/recommendation/ActivityCard';
import { useApp } from '../hooks/useApp';

export function ResultsPage() {
  const { recommendations, showActivity, restart, navigate, searchQuery, parsedSearch } = useApp();
  const summary = searchQuery
    ? `已根据“${searchQuery}”进行本地关键词解析${parsedSearch?.matchedKeywords.length ? `：${parsedSearch.matchedKeywords.join('、')}` : ''}`
    : '已根据你选择的人群、兴趣和时间进行匹配';

  return <PageShell compact>
    <header className="page-header"><BackButton onClick={() => navigate(searchQuery ? 'search' : 'matching')} label="调整条件" /><Button variant="quiet" onClick={restart}>重新开始</Button></header>
    <section className="results-page">
      <p className="eyebrow">为你推荐</p><h1>这 3 场活动可能适合你</h1><p className="page-lead">{summary}</p>
      {recommendations.length > 0 ? <div className="recommendation-grid">{recommendations.map((item) => <ActivityCard key={item.activity.id} recommendation={item} onOpen={() => showActivity(item.activity.id)} />)}</div> : <div className="empty-state"><p>还没有可展示的推荐结果。</p><Button onClick={restart}>回到首页</Button></div>}
    </section>
  </PageShell>;
}
