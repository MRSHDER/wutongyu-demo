import { formatActivityTime, formatAudience, formatTopics } from '../../utils/formatters';
import type { Recommendation } from '../../types/domain';

export function ActivityInfo({ recommendation }: { recommendation: Recommendation }) {
  const { activity, score, reasons } = recommendation;
  return <article className="activity-detail">
    <div className="score-badge">{score}% 匹配</div>
    <h1>{activity.title}</h1>
    <dl>
      <div><dt>时间</dt><dd>{formatActivityTime(activity)}{activity.duration ? `（${activity.duration}）` : ''}</dd></div>
      <div><dt>地点</dt><dd>{activity.location}</dd></div>
      <div><dt>活动类型</dt><dd>{formatTopics(activity.topics)}</dd></div>
      <div><dt>适合人群</dt><dd>{formatAudience(activity.audience)} · {activity.ageRange}</dd></div>
      {activity.organizer && <div><dt>组织方</dt><dd>{activity.organizer}</dd></div>}
    </dl>
    <section><h2>活动介绍</h2><p>{activity.description}</p></section>
    <section>
      <h2>为什么推荐这个活动</h2>
      <ul className="reason-list">
        {reasons.map((reason) => <li key={reason}>{reason}</li>)}
      </ul>
    </section>
  </article>;
}
