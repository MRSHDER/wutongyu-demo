import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { SmartSearchForm } from '../components/search/SmartSearchForm';
import { useApp } from '../hooks/useApp';

export function SearchPage() {
  const { navigate, submitSearch, goHome } = useApp();
  return <PageShell compact>
    <header className="page-header">
      <BackButton onClick={() => navigate('home')} label="返回首页" />
      <Button variant="quiet" onClick={goHome}>回到首页</Button>
    </header>
    <section className="search-page">
      <p className="eyebrow">本地规则智能检索</p>
      <h1>说说你想参加的活动</h1>
      <p className="page-lead">系统会识别时间、人群和活动主题，在本地活动库中为你排序推荐。</p>
      <SmartSearchForm onSubmit={submitSearch} />
    </section>
  </PageShell>;
}
