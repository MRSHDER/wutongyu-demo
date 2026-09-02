import type { AudienceTag, TimePreference, TopicTag } from '../types/domain';

interface SynonymEntry<T extends string> {
  value: T;
  terms: string[];
}

export const AUDIENCE_SYNONYMS: SynonymEntry<AudienceTag>[] = [
  { value: 'family', terms: ['亲子', '孩子', '小朋友', '宝宝', '带娃', '儿童', '小孩'] },
  { value: 'senior', terms: ['退休', '老人', '长者', '老年', '老年人'] },
  { value: 'worker', terms: ['上班族', '上班', '下班', '白领', '工作'] },
  { value: 'youth', terms: ['青年', '年轻人', '大学生'] },
  { value: 'resident', terms: ['居民', '社区居民'] },
];

export const TOPIC_SYNONYMS: SynonymEntry<TopicTag>[] = [
  { value: 'parenting', terms: ['亲子', '孩子', '小朋友', '带娃', '儿童'] },
  { value: 'culture', terms: ['文化', '艺术', '手工', '展览', '阅读'] },
  { value: 'nanjing-culture', terms: ['传统文化', '非遗', '南京文化', '金陵', '秦淮', '灯彩'] },
  { value: 'convenience', terms: ['便民', '咨询', '维修', '服务', '办理'] },
  { value: 'health', terms: ['健康', '养生', '运动', '轻松', '康复', '健身'] },
  { value: 'learning', terms: ['学习', '课程', '讲座', '培训', '学会'] },
  { value: 'volunteer', terms: ['志愿', '公益', '志愿服务', '帮助别人', '服务他人'] },
];

export const TIME_SYNONYMS: SynonymEntry<TimePreference>[] = [
  { value: 'today-morning', terms: ['今天上午', '今早', '上午'] },
  { value: 'today-afternoon', terms: ['今天下午', '下午'] },
  { value: 'today-evening', terms: ['今天晚上', '今晚', '晚上', '晚间', '下班后', '下班以后'] },
  { value: 'weekend', terms: ['周末', '周六', '周日', '星期六', '星期日'] },
  { value: 'weekday', terms: ['工作日', '平日', '周一', '周二', '周三', '周四', '周五'] },
];
