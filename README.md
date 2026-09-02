# 梧桐语 · 社区活动智能匹配站

面向南京「梧桐语」城市客厅横屏触摸设备的前端 Demo。它用本地活动数据和可解释规则，为居民推荐适合的社区活动；不依赖后端、账号、数据库或大模型 API。

## 快速开始

```bash
npm install
npm run dev
```

开发服务器启动后，在浏览器打开终端显示的本地地址。构建生产文件：

```bash
npm run build
npm run preview
```

`npm run build` 生成可部署的 `dist/` 静态文件，可复制到普通 Web 服务器或 Windows 触摸一体机的浏览器运行环境。

## 技术选择

- Vite + React 19 + TypeScript
- 原生 CSS；没有 UI 框架
- React Context 承载一次会话的页面状态；没有 Redux、路由库或复杂状态机
- 本地 TypeScript 数组作为活动数据；没有后端与数据库

## 读代码的推荐顺序

1. [架构说明](docs/ARCHITECTURE.md)
2. [文件导览](docs/FILE_GUIDE.md)
3. `src/data/`：活动、选项和同义词
4. `src/services/`：匹配、推荐、自然语言检索
5. `src/components/` 和 `src/pages/`：触摸屏 UI

## Demo 已包含

- 首页的「开始匹配」和「智能检索」入口
- 3 步快速匹配：人群、可多选主题、方便时间
- 本地关键词检索：同义词识别、条件提取、评分排序
- 18 条独立的模拟活动数据
- Top 3 推荐、匹配度、推荐理由和活动详情
- 任意页面重新匹配

## 最常改动的位置

- 替换/增加活动：`src/data/activities.ts`
- 调整人群与主题选项：`src/data/categories.ts`
- 调整自然语言同义词：`src/data/synonyms.ts`
- 调整评分权重和时间映射：`src/config/matchingConfig.ts`
- 调整匹配逻辑：`src/services/matchingService.ts`

更多边界与扩展方式见 [ARCHITECTURE.md](docs/ARCHITECTURE.md) 和 [FILE_GUIDE.md](docs/FILE_GUIDE.md)。
