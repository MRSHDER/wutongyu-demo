import { Button } from '../common/Button';

export function HomeActions({ onMatch, onSearch }: { onMatch: () => void; onSearch: () => void }) {
  return <div className="home-actions">
    <Button className="home-action" onClick={onMatch}>开始匹配<span>用 3 步找到适合你的活动</span></Button>
    <Button className="home-action" variant="secondary" onClick={onSearch}>智能检索<span>用一句话描述你的需求</span></Button>
  </div>;
}
