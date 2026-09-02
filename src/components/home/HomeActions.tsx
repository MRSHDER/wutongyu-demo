import { Button } from '../common/Button';

export function HomeActions({ onMatch, onSearch }: { onMatch: () => void; onSearch: () => void }) {
  return <div className="home-actions">
    <Button className="home-action" onClick={onMatch}>开始匹配<span>选人群、主题和时间，3 步出推荐</span></Button>
    <Button className="home-action" variant="secondary" onClick={onSearch}>智能检索<span>用一句话说明你想参加什么</span></Button>
  </div>;
}
