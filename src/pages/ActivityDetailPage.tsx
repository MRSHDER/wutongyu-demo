import { ActivityInfo } from '../components/activity/ActivityInfo';
import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { useApp } from '../hooks/useApp';

export function ActivityDetailPage() {
  const { recommendations, activeActivityId, navigate, rematch, goHome } = useApp();
  const recommendation = recommendations.find((item) => item.activity.id === activeActivityId);

  return <PageShell compact>
    <header className="page-header">
      <BackButton onClick={() => navigate('results')} label="返回推荐结果" />
      <div className="page-header__actions">
        <Button variant="quiet" onClick={rematch}>重新匹配</Button>
        <Button variant="secondary" onClick={goHome}>回到首页</Button>
      </div>
    </header>
    {recommendation ? <ActivityInfo recommendation={recommendation} /> : (
      <section className="empty-state">
        <p>没有找到这场活动。</p>
        <div className="page-actions">
          <Button onClick={rematch}>重新匹配</Button>
          <Button variant="secondary" onClick={goHome}>回到首页</Button>
        </div>
      </section>
    )}
  </PageShell>;
}
