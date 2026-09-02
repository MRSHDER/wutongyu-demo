# 项目架构：梧桐语 · 社区活动智能匹配站

## 1. 项目目标

这是一个可离线运行的触摸屏 Web Demo，设计基准为 1920×1080 横屏。它解决「活动很多、居民不知道哪些适合自己」的问题：居民可通过三步选择，或用一句自然语言描述需求；系统在本地活动库中计算并显示 Top 3 推荐。

本阶段的优先级是：结构清晰、规则可解释、可稳定运行、可被后续开发者快速接手。它不是最终视觉稿，也不是在线业务系统。

明确不包含：后端、数据库服务器、用户账号、实时通信、大模型 API、原生 App、Docker、Redux、微前端和大型 UI 框架。

## 2. 技术栈

| 层 | 选择 | 原因 |
| --- | --- | --- |
| 构建 | Vite | 开发启动和静态构建简单快速 |
| UI | React 19 | 页面和触摸组件可拆分、便于替换视觉 |
| 语言 | TypeScript | 活动、条件和推荐结果有明确数据契约 |
| 样式 | 原生 CSS | Demo 不引入 UI 框架，设计改版成本低 |
| 状态 | 小型 React Context | 仅保存本次会话、页面和推荐结果，不引入状态库 |
| 数据 | 本地 TypeScript 数组 | 支持离线，后续可平滑替换为 API |

## 3. 页面结构

```text
HomePage
├─ 开始匹配 → MatchingPage
│  ├─ 第 1 步：人群
│  ├─ 第 2 步：主题（多选）
│  └─ 第 3 步：时间 → ResultsPage
└─ 智能检索 → SearchPage → ResultsPage
                                  └─ 点活动 → ActivityDetailPage
```

页面切换由 `AppContext` 中的轻量 `route` 字段完成。Demo 没有引入 URL 路由库；如果未来需要深链接、浏览器返回栈或多个独立页面，再在此边界引入路由。

## 4. 数据流

```text
触摸输入 / 自然语言
          ↓
Pages + Components（收集、显示；不计算评分）
          ↓
AppContext（编排本次会话与页面切换）
          ↓
services（解析、匹配、取 Top 3）
          ↓
data + config + utils（活动、同义词、权重、纯计算）
          ↓
Recommendation[] = { activity, score, reasons, breakdown }
          ↓
ResultsPage / ActivityDetailPage
```

活动数据只从 `src/data/activities.ts` 出发；推荐服务是唯一将活动数据和匹配服务绑定的地方。UI 不能自行读取并筛选活动数组，也不能自行计算匹配分数。

## 5. 用户交互流程

1. 首页选择「开始匹配」或「智能检索」。
2. 快速匹配依次选择一个人群、一个或多个主题、一个方便时间。
3. 智能检索接收一句文本，展示内置示例以降低输入门槛。
4. 系统返回排序后的 Top 3，每张卡显示时间、类型、人群、简介、匹配度与理由。
5. 点按卡片查看活动详情。
6. 用户可以调整条件、返回结果，或在任意结果/详情页重新开始。

所有主按钮都有大尺寸点击区域；选择状态不依赖 hover；键盘不是必需交互方式。CSS 使用 `touch-action: manipulation`、清晰按下反馈和明显焦点样式。

## 6. 匹配算法

实现位置：

- 权重与时间语义：`src/config/matchingConfig.ts`
- 单项匹配和推荐理由：`src/services/matchingService.ts`
- 分数合并：`src/utils/scoring.ts`
- 活动库绑定与 Top 3 限制：`src/services/recommendationService.ts`

默认权重集中在 `MATCHING_WEIGHTS`：

| 条件 | 权重 | 计算方式 |
| --- | ---: | --- |
| 人群 | 40% | 已选人群中，被活动 `audience` 覆盖的比例 |
| 主题 | 35% | 已选主题中，出现在活动 `topics` 的比例 |
| 时间 | 25% | 已选时间要求被活动 `scheduleTags` 满足的比例 |

快速匹配会使用这三类条件。总分为：

```text
audienceScore × 0.40 + topicScore × 0.35 + timeScore × 0.25
```

智能检索可能没有提到全部条件。此时未提及条件不参与分数，剩余权重会按比例归一化，避免「只说了兴趣」的用户被无关时间或人群错误扣分。

每个推荐都返回如下结构，而非单一数字：

```ts
{
  activity,
  score,
  reasons: ['适合亲子家庭参与。', '符合你对南京文化的兴趣。'],
  breakdown: { audienceScore, topicScore, timeScore, score }
}
```

这样可在页面展示理由，也便于以后记录、分析或替换算法。

## 7. 智能检索算法

实现位置：`src/services/searchService.ts`。全程在浏览器本地运行，不调用任何 API。

```text
用户输入
  ↓ normalizeText
同义词字典匹配（data/synonyms.ts）
  ↓
标准化 MatchCriteria { audience, topics, timePreferences }
  ↓
recommendationService
  ↓
matchingService 评分、排序
  ↓
Top 3 Recommendation[]
```

字典将日常表达映射为标准标签，例如「小朋友」映射到亲子/儿童语义，「退休」映射到老年，「下班以后」映射到工作日晚间，「传统文化」映射到南京文化，「公益」映射到志愿主题。字典与解析逻辑分开：新增同义词优先只改 `src/data/synonyms.ts`。

## 8. 目录职责

```text
src/
├─ assets/        未来的本地图片、图标、字体；当前只保留目录
├─ components/    可复用的展示与触摸交互组件，不含业务评分
├─ config/        集中的可调配置，例如匹配权重和时间要求
├─ context/       小型会话状态与页面编排
├─ data/          固定活动、选择项、用户标签说明、同义词
├─ hooks/         对 Context 等复用逻辑的简洁访问入口
├─ pages/         五个页面级组件，组合组件但不承担算法
├─ services/      匹配、推荐、自然语言检索的业务服务
├─ styles/        全局变量、基础样式和响应式规则
├─ types/         跨层共享的领域数据结构
└─ utils/         纯工具：评分、文本规范化、格式化、集合操作
docs/
├─ ARCHITECTURE.md 架构和演进规则
└─ FILE_GUIDE.md   每个核心文件的直白用途
```

## 9. 核心文件职责

最重要的文件可按以下顺序理解：

1. `src/types/domain.ts`：定义所有层共用的数据契约。
2. `src/data/activities.ts`：唯一的 Demo 活动事实来源。
3. `src/config/matchingConfig.ts`：权重、时间条件、推荐条数。
4. `src/services/matchingService.ts`：把一场活动和一组标准条件变成可解释推荐。
5. `src/services/recommendationService.ts`：对完整活动库取排序后的前几名。
6. `src/services/searchService.ts`：自然语言转标准条件后调用推荐服务。
7. `src/context/AppContext.tsx`：保存当前页面、条件、结果和详情选中项。
8. `src/pages/*.tsx`：将服务结果交给可视化组件。

逐文件说明见 [FILE_GUIDE.md](FILE_GUIDE.md)。

## 10. 允许的依赖方向

允许方向：

```text
pages → components / hooks
hooks → context
context → services / types
services → data / config / utils / types
components → types / utils / common components
utils → config（仅 scoring.ts）/ types
data、config、types → 不依赖 UI、context、services
```

这使得匹配逻辑可以在不启动 React 的情况下单独测试和未来复用。

## 11. 不允许的依赖

- `data/` 不得导入 React、组件、页面、Context 或服务。
- `utils/` 不得读取活动数组、修改状态、渲染 UI 或发网络请求。
- `components/` 不得直接导入 `activities.ts`、`synonyms.ts` 或评分配置。
- `pages/` 不得写匹配公式、关键词字典或活动筛选循环。
- `matchingService` 不得导入任何 React 文件。
- 视觉样式不得反向决定业务规则。

若需求确实违反这些边界，应先新增一个服务、配置或数据适配层，而不是把逻辑塞进页面。

## 12. 后续接入真实 API

保持 `Activity` 类型与 `Recommendation` 类型不变，新增一个数据源适配层即可：

1. 新建 `src/services/activityRepository.ts`，定义 `getActivities(): Promise<Activity[]>`。
2. 初期实现 `localActivityRepository`，直接返回本地 `activities`。
3. API 就绪后实现 `apiActivityRepository`，负责请求、字段转换、错误处理和缓存。
4. 将 `recommendationService` 改为接收活动数据或调用 repository；`matchingService`、组件、页面不需要重写。
5. 真正 AI 检索就绪后，使新的搜索适配器也输出 `ParsedSearch` 或直接输出相同的 `SearchResponse`，UI 无需变化。

异步 API 进入后，再为 Context 增加 `loading` 和 `error` 两个简单状态；不要让页面处理请求细节。

## 13. 如何替换活动数据

编辑 `src/data/activities.ts` 中的数组。每项至少有：

- `id`：稳定、唯一的字符串
- `title`、`description`
- `date`、`time`、`location`
- `audience`：来自 `AudienceTag`
- `topics`：来自 `TopicTag`
- `tags`：展示或未来扩展用的自由标签
- `scheduleTags`：供时间匹配使用
- `intensity`、`ageRange`、`status`

其中 `scheduleTags` 必须满足时间配置中的含义。例如“今天晚上”需要 `['today', 'evening']`；“周末”需包含 `weekend`。`status` 为 `upcoming` 的活动才会被推荐。

## 14. 如何添加新的活动类型

以新增「宠物友好」为例：

1. 在 `TopicTag` 联合类型中增加 `'pet-friendly'`。
2. 在 `TOPIC_LABELS` 和（如需快速匹配入口）`TOPIC_OPTIONS` 加上中文显示文本。
3. 在 `TOPIC_SYNONYMS` 加上「宠物」「遛狗」等词。
4. 在相关活动的 `topics` 中加入 `'pet-friendly'`。
5. 不必修改组件和匹配公式；主题评分已自动按交集计算。

如果新类型不应出现于快速匹配，只做第 1、2、3、4 步即可，它仍可被智能检索识别。

## 15. 如何添加新的用户标签

以新增「新市民」为例：

1. 在 `AudienceTag` 中增加 `'new-resident'`。
2. 在 `AUDIENCE_LABELS` 和 `AUDIENCE_OPTIONS` 中增加中文标签和选择按钮。
3. 在 `AUDIENCE_SYNONYMS` 加入「刚搬来」「新住户」等表达。
4. 在适合的活动 `audience` 中加入 `'new-resident'`。
5. 可选地在 `data/users.ts` 补充产品解释。

人群评分按标签覆盖率计算，因此不需要为新标签改动评分函数。

## 16. 如何增加新的匹配规则

如果要增加「强度偏好」：

1. 在 `MatchCriteria` 添加 `intensities`；在交互页收集它。
2. 在 `matchingConfig.ts` 增加一个集中配置的权重。
3. 在 `matchingService.ts` 增加一个纯函数 `scoreIntensity`，并在 `createReasons` 添加相应说明。
4. 在 `utils/scoring.ts` 接收并合并该得分；注意处理未提供条件时的归一化。
5. 更新 `ScoreBreakdown`、文档和测试。

不要在 `ActivityCard` 或 `MatchingPage` 中写任何新规则；它们只展示和收集输入。
