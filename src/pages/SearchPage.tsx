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
      <p className="eyebrow">智能检索 · 本地活动库</p>
      <h1>说说你想参加的活动</h1>
      <p className="page-lead">说一句人群、主题或时间，系统会在梧桐语客厅的活动库里为你匹配推荐。</p>
      <SmartSearchForm onSubmit={submitSearch} />
    </section>
  </PageShell>;
}
