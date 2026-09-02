import { AUDIENCE_LABELS, TOPIC_LABELS } from '../data/categories';
import type { Activity, AudienceTag, TopicTag } from '../types/domain';

export const formatAudience = (audience: AudienceTag[]) => audience.map((item) => AUDIENCE_LABELS[item]).join('、');

export const formatTopics = (topics: TopicTag[]) => topics.map((item) => TOPIC_LABELS[item]).join(' · ');

export const formatActivityTime = (activity: Activity) => `${activity.date} ${activity.time}`;
