import { formatActivityTime, formatAudience, formatTopics } from '../../utils/formatters';
import type { Recommendation } from '../../types/domain';
import { Button } from '../common/Button';

export function ActivityCard({ recommendation, onOpen }: { recommendation: Recommendation; onOpen: () => void }) {
  const { activity, score, reasons } = recommendation;
  return <article className="activity-card">
    <div className="activity-card__topline"><span>{formatActivityTime(activity)}</span><strong>{score}% 匹配</strong></div>
    <h3>{activity.title}</h3>
    <p className="activity-card__meta">{formatTopics(activity.topics)} · {formatAudience(activity.audience)}</p>
    <p>{activity.description}</p>
    <div className="activity-card__reason"><b>推荐理由：</b>{reasons.join(' ')}</div>
    <Button variant="secondary" onClick={onOpen}>查看活动详情</Button>
  </article>;
}
