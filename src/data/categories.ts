import type { AudienceTag, TimePreference, TopicTag } from '../types/domain';

export interface Choice<T extends string> {
  value: T;
  label: string;
  description?: string;
}

export const AUDIENCE_OPTIONS: Choice<AudienceTag>[] = [
  { value: 'youth', label: '青年' },
  { value: 'senior', label: '老年' },
  { value: 'family', label: '亲子家庭' },
  { value: 'worker', label: '上班族' },
  { value: 'resident', label: '其他居民' },
];

export const TOPIC_OPTIONS: Choice<TopicTag>[] = [
  { value: 'culture', label: '文化体验' },
  { value: 'parenting', label: '亲子活动' },
  { value: 'convenience', label: '便民服务' },
  { value: 'health', label: '健康生活' },
  { value: 'learning', label: '兴趣学习' },
  { value: 'volunteer', label: '志愿公益' },
];

export const TIME_OPTIONS: Choice<TimePreference>[] = [
  { value: 'today-morning', label: '今天上午' },
  { value: 'today-afternoon', label: '今天下午' },
  { value: 'today-evening', label: '今天晚上' },
  { value: 'weekday', label: '工作日' },
  { value: 'weekend', label: '周末' },
];

export const AUDIENCE_LABELS: Record<AudienceTag, string> = {
  youth: '青年',
  senior: '老年',
  family: '亲子家庭',
  worker: '上班族',
  resident: '其他居民',
  'all-residents': '全体居民',
};

export const TOPIC_LABELS: Record<TopicTag, string> = {
  culture: '文化体验',
  parenting: '亲子活动',
  convenience: '便民服务',
  health: '健康生活',
  learning: '兴趣学习',
  volunteer: '志愿公益',
  'nanjing-culture': '南京文化',
};
