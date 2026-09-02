import { HomeActions } from '../components/home/HomeActions';
import { PageShell } from '../components/common/PageShell';
import { useApp } from '../hooks/useApp';

export function HomePage() {
  const { navigate } = useApp();
  return <PageShell>
    <section className="home-page">
      <p className="eyebrow">南京·浦口 · 梧桐语小型城市客厅</p>
      <h1>便民公益<br />智能匹配</h1>
      <p className="home-page__intro">这里汇集了社区便民、公益和文化活动。按照人群、主题和时间，帮你找到更适合的一场。</p>
      <HomeActions onMatch={() => navigate('matching')} onSearch={() => navigate('search')} />
    </section>
  </PageShell>;
}
