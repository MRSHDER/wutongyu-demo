import type { Activity } from '../types/domain';

/** Demo-only activity source. Replace this array or load the same shape from an API later. */
export const activities: Activity[] = [
  {
    id: 'qinhuai-lantern-paper', title: '秦淮灯彩折纸', description: '在老师带领下认识秦淮灯彩，并完成一盏可带走的折纸小灯。', date: '本周六', time: '14:00–15:30', location: '梧桐语城市客厅 · 手作区', audience: ['family', 'youth'], topics: ['culture', 'parenting', 'nanjing-culture'], tags: ['非遗', '手工', '秦淮'], scheduleTags: ['weekend', 'afternoon'], intensity: 'relaxed', ageRange: '5岁以上', status: 'upcoming', capacity: 20, organizer: '秦淮非遗志愿团', duration: '90分钟',
  },
  {
    id: 'senior-tea-talk', title: '银龄茶话会', description: '围绕邻里生活、养生小窍门和社区新鲜事，轻松聊一聊。', date: '本周三', time: '09:30–10:30', location: '梧桐语城市客厅 · 邻里厅', audience: ['senior'], topics: ['health', 'convenience'], tags: ['退休', '养生', '社交'], scheduleTags: ['weekday', 'morning'], intensity: 'relaxed', ageRange: '55岁以上', status: 'upcoming', capacity: 30, organizer: '社区养老服务站', duration: '60分钟',
  },
  {
    id: 'after-work-volunteer', title: '下班后的社区志愿行动', description: '一起整理共享书架、为邻里驿站补充物资，完成一小时轻量志愿服务。', date: '本周四', time: '19:00–20:00', location: '梧桐语城市客厅 · 服务台', audience: ['worker', 'youth', 'resident'], topics: ['volunteer', 'convenience'], tags: ['公益', '志愿服务', '下班后'], scheduleTags: ['weekday', 'evening'], intensity: 'moderate', ageRange: '16岁以上', status: 'upcoming', capacity: 16, organizer: '梧桐语志愿队', duration: '60分钟',
  },
  {
    id: 'family-picture-book', title: '亲子绘本共读时光', description: '亲子共读南京城市主题绘本，搭配简单的角色扮演小游戏。', date: '本周日', time: '10:00–11:00', location: '梧桐语城市客厅 · 阅读角', audience: ['family'], topics: ['parenting', 'culture'], tags: ['绘本', '儿童', '带娃'], scheduleTags: ['weekend', 'morning'], intensity: 'relaxed', ageRange: '3–8岁', status: 'upcoming', capacity: 12, organizer: '社区亲子阅读团', duration: '60分钟',
  },
  {
    id: 'morning-health-qigong', title: '晨间八段锦', description: '适合零基础居民的舒缓八段锦练习，老师会根据身体状况调整动作。', date: '今天', time: '09:00–09:45', location: '梧桐语城市客厅 · 阳光厅', audience: ['senior', 'resident'], topics: ['health'], tags: ['八段锦', '养生', '轻松'], scheduleTags: ['today', 'morning', 'weekday'], intensity: 'relaxed', ageRange: '18岁以上', status: 'upcoming', capacity: 25, organizer: '社区健康驿站', duration: '45分钟',
  },
  {
    id: 'phone-help-desk', title: '手机使用便民小课堂', description: '学习挂号、扫码乘车和照片整理等常用手机操作，一对一答疑。', date: '今天', time: '14:30–16:00', location: '梧桐语城市客厅 · 数字服务台', audience: ['senior', 'resident'], topics: ['convenience', 'learning'], tags: ['手机', '便民', '数字生活'], scheduleTags: ['today', 'afternoon', 'weekday'], intensity: 'relaxed', ageRange: '45岁以上', status: 'upcoming', capacity: 18, organizer: '社区数字助老队', duration: '90分钟',
  },
  {
    id: 'nanjing-cloud-brocade', title: '南京云锦纹样体验', description: '认识云锦的色彩与纹样，用纸织带完成自己的迷你纹样卡。', date: '本周六', time: '10:00–11:30', location: '梧桐语城市客厅 · 手作区', audience: ['family', 'youth', 'resident'], topics: ['culture', 'learning', 'nanjing-culture'], tags: ['云锦', '非遗', '南京文化'], scheduleTags: ['weekend', 'morning'], intensity: 'relaxed', ageRange: '8岁以上', status: 'upcoming', capacity: 18, organizer: '南京云锦研究社', duration: '90分钟',
  },
  {
    id: 'community-repair', title: '社区小家电义诊', description: '带上家中小型电器，由维修志愿者帮助排查常见问题。', date: '本周六', time: '09:30–11:30', location: '梧桐语城市客厅 · 门厅', audience: ['resident', 'senior'], topics: ['convenience', 'volunteer'], tags: ['维修', '便民', '家电'], scheduleTags: ['weekend', 'morning'], intensity: 'relaxed', ageRange: '不限', status: 'upcoming', capacity: 40, organizer: '社区工匠志愿队', duration: '120分钟',
  },
  {
    id: 'workday-yoga', title: '午间舒展瑜伽', description: '为久坐上班族准备的低强度舒展练习，帮助放松肩颈。', date: '本周二', time: '12:15–13:00', location: '梧桐语城市客厅 · 阳光厅', audience: ['worker', 'youth'], topics: ['health'], tags: ['瑜伽', '肩颈', '午休'], scheduleTags: ['weekday', 'afternoon'], intensity: 'moderate', ageRange: '18岁以上', status: 'upcoming', capacity: 16, organizer: '社区运动社群', duration: '45分钟',
  },
  {
    id: 'public-speaking', title: '邻里故事表达工作坊', description: '用轻松的即兴练习，练习讲述一段自己的南京生活故事。', date: '本周五', time: '19:00–20:30', location: '梧桐语城市客厅 · 多功能厅', audience: ['youth', 'worker', 'resident'], topics: ['learning', 'culture'], tags: ['表达', '故事', '青年'], scheduleTags: ['weekday', 'evening'], intensity: 'moderate', ageRange: '16岁以上', status: 'upcoming', capacity: 20, organizer: '城市客厅主持团', duration: '90分钟',
  },
  {
    id: 'parent-child-gardening', title: '亲子阳台菜园', description: '和孩子一起认识香草和蔬菜种子，带走一份亲手种下的小盆栽。', date: '本周日', time: '14:00–15:30', location: '梧桐语城市客厅 · 共享花园', audience: ['family'], topics: ['parenting', 'health'], tags: ['种植', '儿童', '自然'], scheduleTags: ['weekend', 'afternoon'], intensity: 'moderate', ageRange: '4岁以上', status: 'upcoming', capacity: 15, organizer: '社区园艺社', duration: '90分钟',
  },
  {
    id: 'senior-photo-walk', title: '银龄手机摄影漫步', description: '在附近街区练习手机取景，慢节奏记录秋日梧桐。', date: '本周四', time: '09:30–11:00', location: '梧桐语城市客厅 · 集合点', audience: ['senior'], topics: ['learning', 'health', 'culture'], tags: ['摄影', '退休', '慢走'], scheduleTags: ['weekday', 'morning'], intensity: 'relaxed', ageRange: '55岁以上', status: 'upcoming', capacity: 15, organizer: '社区摄影志愿团', duration: '90分钟',
  },
  {
    id: 'nanjing-dialect-night', title: '南京话趣味夜校', description: '从日常问候和地名说起，在游戏中感受南京方言的趣味。', date: '今天', time: '19:00–20:15', location: '梧桐语城市客厅 · 阅读角', audience: ['youth', 'worker', 'resident'], topics: ['culture', 'learning', 'nanjing-culture'], tags: ['南京话', '方言', '夜校'], scheduleTags: ['today', 'evening', 'weekday'], intensity: 'relaxed', ageRange: '12岁以上', status: 'upcoming', capacity: 24, organizer: '金陵语言社', duration: '75分钟',
  },
  {
    id: 'weekend-river-cleanup', title: '周末河岸清洁行动', description: '沿社区河岸完成垃圾分类与环境记录，适合家庭和青年结伴参与。', date: '本周六', time: '08:30–10:00', location: '梧桐语城市客厅 · 东门集合', audience: ['family', 'youth', 'resident'], topics: ['volunteer', 'health'], tags: ['环保', '公益', '户外'], scheduleTags: ['weekend', 'morning'], intensity: 'active', ageRange: '8岁以上', status: 'upcoming', capacity: 30, organizer: '绿色邻里志愿队', duration: '90分钟',
  },
  {
    id: 'health-consultation', title: '邻里健康咨询日', description: '家庭医生提供血压测量和常见健康问题咨询，按到场顺序服务。', date: '本周三', time: '14:00–16:00', location: '梧桐语城市客厅 · 健康服务台', audience: ['senior', 'resident'], topics: ['health', 'convenience'], tags: ['医生', '血压', '咨询'], scheduleTags: ['weekday', 'afternoon'], intensity: 'relaxed', ageRange: '不限', status: 'upcoming', capacity: 35, organizer: '社区卫生服务中心', duration: '120分钟',
  },
  {
    id: 'weekend-calligraphy', title: '周末书法入门', description: '从执笔和横竖撇捺开始，体验一小时安静的毛笔书写。', date: '本周日', time: '09:30–11:00', location: '梧桐语城市客厅 · 书画桌', audience: ['senior', 'youth', 'resident'], topics: ['culture', 'learning'], tags: ['书法', '传统文化', '安静'], scheduleTags: ['weekend', 'morning'], intensity: 'relaxed', ageRange: '12岁以上', status: 'upcoming', capacity: 16, organizer: '社区书画社', duration: '90分钟',
  },
  {
    id: 'children-safety', title: '儿童安全小卫士', description: '通过情景游戏认识交通、居家和陌生人安全知识。', date: '今天', time: '15:30–16:30', location: '梧桐语城市客厅 · 多功能厅', audience: ['family'], topics: ['parenting', 'learning'], tags: ['儿童', '安全', '游戏'], scheduleTags: ['today', 'afternoon', 'weekday'], intensity: 'moderate', ageRange: '5–10岁', status: 'upcoming', capacity: 20, organizer: '社区儿童之家', duration: '60分钟',
  },
  {
    id: 'evening-board-games', title: '邻里桌游轻社交', description: '无需经验，现场教学合作类桌游，认识同社区的新朋友。', date: '本周五', time: '19:30–21:00', location: '梧桐语城市客厅 · 邻里厅', audience: ['youth', 'worker', 'resident'], topics: ['learning', 'culture'], tags: ['桌游', '社交', '下班后'], scheduleTags: ['weekday', 'evening'], intensity: 'relaxed', ageRange: '16岁以上', status: 'upcoming', capacity: 20, organizer: '梧桐语青年社群', duration: '90分钟',
  },
];
