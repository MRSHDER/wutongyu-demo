# 文件导览：这个文件是干什么的？

本项目希望后续 AI 或开发者不必猜测文件职责。先读 `README.md`，再读 `ARCHITECTURE.md`，最后以本文件定位具体改动点。

## 根目录

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `package.json` | 项目依赖与 `dev`、`build`、`preview` 命令。 | 不要为简单功能随意加大型依赖。 |
| `vite.config.ts` | Vite 的开发与构建配置。 | 不要在这里放业务逻辑。 |
| `index.html` | React 挂载的 HTML 外壳。 | 不要把页面内容直接写进这里。 |
| `README.md` | 运行方式、项目概览、阅读入口。 | 不要在这里维护详细算法。 |

## 领域类型与配置

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/types/domain.ts` | 所有核心数据的 TypeScript 类型：活动、条件、评分、推荐、页面路由。 | 不要放 React 组件 props 或具体活动数据。 |
| `src/config/matchingConfig.ts` | 集中放匹配权重、时间条件映射和默认推荐数量。 | 不要把这些数字散落到页面或组件中。 |

## 数据层：只存事实和词典

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/data/activities.ts` | 所有 Demo 活动数据都在这里。未来真实活动数据可替换它。 | 不要在页面组件里直接写活动对象。 |
| `src/data/categories.ts` | 快速匹配的选项及标准标签的中文显示名称。 | 不要放评分或筛选逻辑。 |
| `src/data/synonyms.ts` | 自然语言关键词和标准标签的映射字典。 | 不要渲染输入框或调用服务。 |
| `src/data/users.ts` | 第一阶段人群标签的产品说明，预留给未来更丰富的居民画像。 | 不要存用户个人信息。 |

## 工具层：小而纯的通用计算

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/utils/scoring.ts` | 只负责按配置合并各项分数，并处理缺失条件的权重归一化。 | 不负责读取活动数据、页面或自然语言。 |
| `src/utils/textParser.ts` | 只负责文本标准化和在词典中找命中的词。 | 不决定推荐活动。 |
| `src/utils/formatters.ts` | 只负责把活动标签与时间整理为页面可读文本。 | 不修改活动或分数。 |
| `src/utils/helpers.ts` | 放很小的、没有业务副作用的集合工具。 | 不要膨胀成万能业务文件。 |

## 服务层：业务逻辑唯一入口

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/services/matchingService.ts` | 根据用户选择计算每一场活动的分数和推荐理由。输出 `Recommendation`。 | 不负责渲染 UI，也不应知道 React。 |
| `src/services/recommendationService.ts` | 将活动数据送入匹配服务，排序后取 Top 3。 | 不解析用户自然语言。 |
| `src/services/searchService.ts` | 解析自然语言需求，得到标准条件，再调用推荐服务。 | 不负责渲染搜索框或详情卡片。 |

## 会话状态与启动

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/context/AppContext.tsx` | 保存本次会话的当前页面、匹配条件、结果、搜索语句和详情选中项；它负责调用服务并切换页面。 | 不要把复杂算法搬进来。 |
| `src/hooks/useApp.ts` | 让页面以简短统一方式访问 `AppContext`。 | 不要在这里加额外状态。 |
| `src/App.tsx` | 根据轻量 route 选择五个页面之一。 | 不要加业务计算。 |
| `src/main.tsx` | React 唯一启动入口，并加载全局样式。 | 不要放任何功能逻辑。 |

## 组件：负责显示和触摸反馈

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/components/common/Button.tsx` | 所有主按钮的基础外壳和样式变体。 | 不决定用户点完按钮后推荐什么。 |
| `src/components/common/PageShell.tsx` | 统一页面的横屏留白、背景和容器。 | 不放页面专属内容。 |
| `src/components/common/BackButton.tsx` | 可复用的返回按钮。 | 不直接读取全局状态。 |
| `src/components/home/HomeActions.tsx` | 首页两个入口按钮。 | 不自己切换路由。 |
| `src/components/matching/OptionGrid.tsx` | 显示可点选的大按钮网格。 | 不知道「青年」或「文化」的业务含义。 |
| `src/components/matching/StepIndicator.tsx` | 显示快速匹配的第几步。 | 不保存选择结果。 |
| `src/components/search/SmartSearchForm.tsx` | 自然语言文本输入、提交和可点选示例。 | 不解析关键词。 |
| `src/components/recommendation/ActivityCard.tsx` | 显示一条推荐活动和其理由。 | 不决定活动排名。 |
| `src/components/activity/ActivityInfo.tsx` | 显示活动详情。 | 不重新计算匹配度。 |

## 页面：负责组合组件

| 文件 | 这个文件是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/pages/HomePage.tsx` | 项目介绍，以及进入两种入口。 | 不保存匹配算法。 |
| `src/pages/MatchingPage.tsx` | 三步收集快速匹配条件；第二步允许多选。 | 不写活动筛选或评分公式。 |
| `src/pages/SearchPage.tsx` | 展示自然语言搜索入口。 | 不读取同义词字典。 |
| `src/pages/ResultsPage.tsx` | 展示 Top 3 推荐和已识别的搜索关键词。 | 不自行排序活动。 |
| `src/pages/ActivityDetailPage.tsx` | 展示用户点开的活动和重新匹配入口。 | 不请求或计算推荐。 |

## 样式与资源

| 路径 | 这个路径是干什么的？ | 不要做什么？ |
| --- | --- | --- |
| `src/styles/variables.css` | 全局颜色、字体、阴影等设计变量。 | 不放组件专属的大段样式。 |
| `src/styles/globals.css` | 基础元素和当前 Demo 的组件布局样式。 | 不放业务判断。 |
| `src/styles/responsive.css` | 窄屏时的兜底布局规则；主设计仍以横屏触摸为主。 | 不重新定义业务交互。 |
| `src/assets/images/` | 后续本地图片。 | 不把活动元数据写进图片文件名。 |
| `src/assets/icons/` | 后续本地图标。 | 不放页面逻辑。 |
| `src/assets/fonts/` | 后续经过授权的本地字体。 | 不提交来源不明或无授权字体。 |

## 最常见需求该改哪里？

| 需求 | 首选改动点 |
| --- | --- |
| 新增一场活动 | `src/data/activities.ts` |
| 改推荐权重 | `src/config/matchingConfig.ts` |
| 识别一个新说法，例如“遛娃” | `src/data/synonyms.ts` |
| 改快速匹配按钮文案 | `src/data/categories.ts` |
| 改卡片视觉 | `ActivityCard.tsx` 和 `globals.css` |
| 新增一个评分维度 | `domain.ts` → `matchingConfig.ts` → `matchingService.ts` → `scoring.ts` |
| 改用真实 API 数据 | 新建 repository/adapter，再调整 `recommendationService.ts` |
