import { ActivityInfo } from '../components/activity/ActivityInfo';
import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { useApp } from '../hooks/useApp';

export function ActivityDetailPage() {
  const { recommendations, activeActivityId, navigate, restart } = useApp();
  const recommendation = recommendations.find((item) => item.activity.id === activeActivityId);

  return <PageShell compact>
    <header className="page-header"><BackButton onClick={() => navigate('results')} label="返回推荐结果" /><Button variant="quiet" onClick={restart}>重新匹配</Button></header>
    {recommendation ? <ActivityInfo recommendation={recommendation} /> : <section className="empty-state"><p>没有找到这场活动。</p><Button onClick={restart}>重新开始</Button></section>}
  </PageShell>;
}
