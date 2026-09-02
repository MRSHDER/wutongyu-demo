import { HomeActions } from '../components/home/HomeActions';
import { PageShell } from '../components/common/PageShell';
import { useApp } from '../hooks/useApp';

export function HomePage() {
  const { navigate } = useApp();
  return <PageShell>
    <section className="home-page">
      <p className="eyebrow">南京 · 梧桐语城市客厅</p>
      <h1>梧桐语 · 社区活动<br />智能匹配站</h1>
      <p className="home-page__intro">社区活动很多，我们帮你从中找到此刻更适合的一场。</p>
      <HomeActions onMatch={() => navigate('matching')} onSearch={() => navigate('search')} />
    </section>
  </PageShell>;
}
