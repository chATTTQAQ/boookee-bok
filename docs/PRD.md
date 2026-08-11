# PRD — boookee-bok 个人博客

> 版本：v1.0 | 日期：2026-08-11 | 状态：草案

---

## 1. 项目概述

### 1.1 项目背景

构建一个个人博客网站，用于展示个人介绍和发布文章。整体设计参考 **苹果官网（apple.com）** 的视觉语言：极简、克制、大留白、大字体、沉浸式滚动叙事。

### 1.2 核心目标

- 让访客在 **3 秒内** 知道"这个人是谁、能看什么"
- 阅读体验干净沉浸，无干扰
- 视觉品质对标 Apple 官网，但用 MVP 的开发量实现

### 1.3 MVP 原则

| 原则 | 说明 |
| --- | --- |
| **只做核心路径** | 首页 → 个人介绍 → 文章列表 → 文章详情，不多做 |
| **Mock 数据先行** | 所有内容用本地 JSON/TS 文件，不接数据库 |
| **视觉优先** | MVP 阶段可以功能少，但视觉品质不能降 |
| **不做的事** | 不做评论、不做搜索、不做后台管理、不做用户系统 |

---

## 2. 用户角色

| 角色 | 描述 | 核心诉求 |
| --- | --- | --- |
| 访客 | 任意打开网站的浏览者 | 了解博主是谁，阅读文章 |
| 博主（你） | 网站所有者 | 展示个人形象，发布和归档文章 |

> MVP 阶段不区分登录态，所有页面公开访问。

---

## 3. 功能需求

### 3.1 功能清单

| 编号 | 功能 | 优先级 | MVP | 说明 |
| --- | --- | --- | --- | --- |
| F-01 | 首页 / Hero 展示 | P0 | ✅ | 全屏 Hero 区 + 个人一句话介绍 + CTA |
| F-02 | 个人介绍页 | P0 | ✅ | 关于我、技能、经历、联系方式 |
| F-03 | 文章列表页 | P0 | ✅ | 卡片式文章列表，支持标签筛选 |
| F-04 | 文章详情页 | P0 | ✅ | Markdown 渲染、代码高亮、目录导航 |
| F-05 | 导航栏 | P0 | ✅ | 顶部毛玻璃导航，页面间切换 |
| F-06 | 页脚 | P0 | ✅ | 版权信息、社交链接 |
| F-07 | 暗色模式 | P1 | ⏳ | 预留 CSS 变量，MVP 先做亮色 |
| F-08 | 文章搜索 | P2 | ❌ | 后续迭代 |
| F-09 | 评论系统 | P2 | ❌ | 后续迭代 |
| F-10 | RSS 订阅 | P2 | ❌ | 后续迭代 |

### 3.2 功能详细说明

#### F-01 首页 / Hero 展示

**目的**：第一眼抓住访客，传递"我是谁"。

**内容**：
- 全屏 Hero 区域（100vh）
- 大标题：博主名称 / 一句话定位（如 "独立开发者 · 写字的人"）
- 副标题：一段简短的个人描述（2-3 行）
- CTA 按钮：两个 —— 「了解更多」跳转个人介绍页，「阅读文章」跳转文章列表
- 背景：纯色或渐变（参考 Apple 产品页的渐变），可加微妙的动态效果

**滚动行为**：
- Hero 区下方接"精选文章"区块，展示 3 篇置顶文章的大卡片
- 滚动时 Hero 内容有视差淡出效果

#### F-02 个人介绍页

**目的**：让访客了解博主的背景、能力和联系方式。

**页面区块**（从上到下）：

1. **头部 Hero** — 头像 + 姓名 + 一句话标语
2. **关于我** — 2-3 段自我介绍文字
3. **技能栈** — 图标 + 名称网格展示（如 React、Next.js、Node.js 等）
4. **经历时间线** — 竖向时间线，展示工作/项目经历
5. **联系方式** — 邮箱、GitHub、Twitter 等图标链接

**交互**：
- 滚动进入各区块时，内容从下方淡入上移
- 时间线节点依次出现（stagger 动画）

#### F-03 文章列表页

**目的**：浏览全部文章，快速找到感兴趣的内容。

**内容**：
- 页面顶部：大标题 "Articles" + 文章总数
- 标签筛选栏：全部 + 各标签按钮，点击筛选
- 文章卡片网格：每张卡片包含 —— 封面图、标题、日期、标签、摘要
- 卡片悬停：轻微上浮 + 阴影加深（Apple 风格的克制动效）

**布局**：
- 桌面端：2 列网格
- 平板端：2 列网格（缩小间距）
- 移动端：单列

#### F-04 文章详情页

**目的**：沉浸式阅读体验。

**内容**：
- 顶部：文章标题 + 发布日期 + 标签 + 阅读时长
- 正文：Markdown 渲染，支持代码高亮
- 右侧目录（桌面端）：自动提取 h2/h3 生成，滚动高亮当前章节
- 底部：上一篇 / 下一篇导航

**排版规范**（参考 Apple Newsroom）：
- 正文最大宽度 680px
- 行高 1.75，字号 17px
- 代码块：暗色背景，圆角，等宽字体
- 图片：圆角，居中，最大宽度撑满内容区

#### F-05 导航栏

- 固定在顶部，滚动时背景变为毛玻璃效果（backdrop-blur）
- 左侧：Logo / 博主名
- 右侧：导航链接（首页、关于、文章）
- 移动端：汉堡菜单 → 全屏抽屉式导航

#### F-06 页脚

- 简洁一行：© 2026 博主名 + 社交图标
- 暗色背景，浅色文字

---

## 4. 页面结构

### 4.1 路由设计

```
/                    → 首页（Hero + 精选文章）
/about               → 个人介绍页
/articles            → 文章列表页
/articles/[slug]     → 文章详情页
```

### 4.2 页面流转图

```
┌──────────┐
│   首页   │
│  (Hero)  │
└────┬─────┘
     │ CTA
     ├──────────────┐
     ▼              ▼
┌──────────┐  ┌───────────┐
│ 关于页面  │  │ 文章列表   │
└──────────┘  └─────┬─────┘
                    │ 点击卡片
                    ▼
              ┌───────────┐
              │ 文章详情   │
              └───────────┘
```

---

## 5. 设计规范

### 5.1 视觉风格（Apple 官网参考）

| 维度 | 规范 | 参考来源 |
| --- | --- | --- |
| 整体风格 | 极简、大留白、内容驱动 | apple.com 产品页 |
| 字体 | SF Pro Display（或 Inter 作为 Web 替代） | Apple 系统字体 |
| 正文字号 | 17px / 1.75 行高 | Apple Newsroom |
| 大标题字号 | 48px - 80px（响应式） | Apple 产品页 Hero |
| 圆角 | 卡片 12-18px，按钮 980px（胶囊形） | Apple Card / Button |
| 阴影 | 极轻，只在悬停时加深 | Apple 产品卡 |
| 动效 | 缓慢、流畅，cubic-bezier(0.4, 0, 0.2, 1) | Apple 滚动动画 |

### 5.2 色彩系统

```
/* 亮色主题（MVP） */
--color-bg-primary:    #FFFFFF;     /* 页面背景 */
--color-bg-secondary:  #F5F5F7;     /* 区块背景（Apple 灰） */
--color-text-primary:  #1D1D1F;     /* 主文字（Apple 黑） */
--color-text-secondary:#6E6E73;     /* 次要文字 */
--color-accent:        #0071E3;     /* 强调色（Apple 蓝） */
--color-border:        #D2D2D7;     /* 分割线 / 边框 */
--color-card-bg:       #FFFFFF;     /* 卡片背景 */

/* 预留暗色主题 */
--color-bg-primary-dark:    #000000;
--color-bg-secondary-dark:  #1D1D1F;
--color-text-primary-dark:  #F5F5F7;
--color-text-secondary-dark:#86868B;
```

### 5.3 间距系统

```
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  48px;
--space-xl:  80px;
--space-2xl: 120px;     /* 区块间距（Apple 风格的大留白） */
```

### 5.4 字体层级

| 用途 | 字号 | 字重 | 行高 |
| --- | --- | --- | --- |
| Hero 大标题 | 56-80px | 700 | 1.05 |
| 页面标题 | 40-56px | 700 | 1.1 |
| 区块标题 | 28-36px | 600 | 1.2 |
| 卡片标题 | 20-24px | 600 | 1.3 |
| 正文 | 17px | 400 | 1.75 |
| 辅助文字 | 14px | 400 | 1.5 |

### 5.5 响应式断点

```
sm:  640px   /* 大手机 */
md:  768px   /* 平板竖屏 */
lg:  1024px  /* 平板横屏 / 小笔记本 */
xl:  1280px  /* 桌面 */
2xl: 1536px  /* 大屏桌面 */
```

---

## 6. 技术架构

### 6.1 技术选型

| 层级 | 技术 | 版本 | 选型理由 |
| --- | --- | --- | --- |
| 框架 | Next.js (App Router) | 14+ | SSG/SSR，文件路由，React 生态 |
| 语言 | TypeScript | 5+ | 类型安全 |
| 样式 | Tailwind CSS | 3+ | 原子化，快速实现 Apple 风格 |
| 动画 | Framer Motion | 11+ | 声明式动画，适合滚动触发 |
| 图标 | lucide-react | latest | 轻量，风格统一 |
| Markdown | react-markdown + remark/rehype | latest | 文章渲染 |
| 代码高亮 | rehype-highlight 或 shiki | latest | 代码块语法高亮 |

### 6.2 项目目录结构

```
boookee-bok/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # 根布局（导航 + 页脚）
│   │   ├── page.tsx              # 首页
│   │   ├── about/
│   │   │   └── page.tsx          # 个人介绍页
│   │   ├── articles/
│   │   │   ├── page.tsx          # 文章列表页
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # 文章详情页
│   │   └── globals.css           # 全局样式 + CSS 变量
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # 导航栏
│   │   │   └── Footer.tsx        # 页脚
│   │   ├── home/
│   │   │   ├── Hero.tsx          # 首页 Hero
│   │   │   └── FeaturedPosts.tsx # 精选文章
│   │   ├── about/
│   │   │   ├── SkillGrid.tsx     # 技能展示
│   │   │   └── Timeline.tsx      # 经历时间线
│   │   ├── article/
│   │   │   ├── ArticleCard.tsx   # 文章卡片
│   │   │   ├── ArticleList.tsx   # 文章列表
│   │   │   ├── ArticleContent.tsx# 文章正文渲染
│   │   │   └── TableOfContents.tsx # 目录导航
│   │   └── ui/
│   │       ├── Button.tsx        # 按钮组件
│   │       ├── Tag.tsx           # 标签组件
│   │       └── Reveal.tsx        # 滚动入场动画封装
│   ├── data/                     # Mock 数据
│   │   ├── profile.ts            # 个人信息
│   │   ├── posts.ts              # 文章列表 + 正文
│   │   └── skills.ts             # 技能数据
│   ├── lib/                      # 工具函数
│   │   └── utils.ts              # 通用工具（日期格式化等）
│   └── types/                    # TypeScript 类型定义
│       └── index.ts
├── public/                       # 静态资源
├── tailwind.config.ts            # Tailwind 配置
├── next.config.mjs               # Next.js 配置
├── tsconfig.json                 # TypeScript 配置
└── package.json
```

### 6.3 渲染策略

| 页面 | 策略 | 理由 |
| --- | --- | --- |
| 首页 | SSG (generateStaticParams) | 内容固定，追求最快加载 |
| 个人介绍页 | SSG | 同上 |
| 文章列表页 | SSG | Mock 数据静态生成 |
| 文章详情页 | SSG + generateStaticParams | 预生成所有文章页 |

> MVP 阶段全部静态生成，不涉及 ISR / SSR / API Route。

---

## 7. Mock 数据模型

### 7.1 个人信息 (profile)

```typescript
interface Profile {
  name: string;                    // 姓名
  title: string;                   // 一句话定位
  tagline: string;                 // Hero 副标题
  avatar: string;                  // 头像 URL
  bio: string[];                   // 自我介绍（多段）
  social: {
    email: string;
    github: string;
    twitter: string;
  };
  experiences: Experience[];       // 经历时间线
}

interface Experience {
  year: string;                    // "2024"
  title: string;                   // "高级前端工程师"
  organization: string;            // "某公司"
  description: string;             // 简要描述
}
```

### 7.2 技能 (skills)

```typescript
interface Skill {
  name: string;                    // "React"
  icon: string;                    // 图标标识
  level: "熟悉" | "熟练" | "精通";
}
```

### 7.3 文章 (posts)

```typescript
interface Post {
  slug: string;                    // URL 标识 "my-first-post"
  title: string;                   // 标题
  summary: string;                 // 摘要
  content: string;                 // Markdown 正文
  coverImage: string;              // 封面图 URL
  tags: string[];                  // 标签 ["技术", "随笔"]
  publishedAt: string;             // 发布日期 "2026-08-11"
  readingTime: number;             // 阅读时长（分钟）
  featured: boolean;               // 是否首页精选
}
```

### 7.4 Mock 数据示例

```typescript
// src/data/profile.ts
export const profile: Profile = {
  name: "你的名字",
  title: "独立开发者 · 写字的人",
  tagline: "用代码构建产品，用文字记录思考。",
  avatar: "/images/avatar.jpg",
  bio: [
    "你好，我是一名前端开发者，热衷于用技术创造有价值的产品。",
    "工作之余，我喜欢写写技术笔记和生活随笔，分享踩过的坑和想明白的事。",
  ],
  social: {
    email: "hello@example.com",
    github: "https://github.com/your-username",
    twitter: "https://twitter.com/your-username",
  },
  experiences: [
    {
      year: "2024 — 至今",
      title: "独立开发者",
      organization: "自由职业",
      description: "独立开发并上线多个产品，专注于 Web 应用开发。",
    },
    {
      year: "2021 — 2024",
      title: "高级前端工程师",
      organization: "某科技公司",
      description: "负责核心产品的前端架构和性能优化。",
    },
  ],
};
```

---

## 8. 交互与动画规范

### 8.1 滚动入场动画

所有页面区块在滚动进入视口时触发淡入上移动画：

```
初始状态：opacity: 0, translateY: 40px
结束状态：opacity: 1, translateY: 0
时长：  0.6s
缓动：  cubic-bezier(0.4, 0, 0.2, 1)
```

- 使用 Framer Motion 的 `whileInView` 实现
- 同一区块内多个元素设置 stagger（依次出现，间隔 0.1s）

### 8.2 卡片悬停

```
transform: translateY(-4px)
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08)
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### 8.3 导航栏滚动行为

- 页面在顶部时：背景透明
- 向下滚动超过 20px：背景变为 `rgba(255, 255, 255, 0.72)` + `backdrop-blur(20px)` + 底部细边框
- 移动端汉堡菜单：点击后全屏覆盖式展开，带淡入动画

### 8.4 页面切换

- 使用 Next.js App Router 原生路由
- 页面切换时整体内容淡入（不需要复杂转场，保持简洁）

### 8.5 动效原则

> **克制** — Apple 风格的核心。动效是为了引导注意力，不是炫技。

- 每个页面最多 2-3 种动效类型
- 动效时长不超过 0.8s
- 永远使用 `cubic-bezier(0.4, 0, 0.2, 1)` 或类似缓动
- `prefers-reduced-motion` 时禁用所有动画

---

## 9. 非功能需求

| 维度 | 要求 |
| --- | --- |
| 性能 | Lighthouse 性能分 ≥ 90，LCP < 2s |
| SEO | 每页独立 title/description，自动生成 sitemap |
| 无障碍 | 语义化 HTML，键盘可导航，图片有 alt |
| 兼容性 | Chrome / Safari / Firefox / Edge 最新两个版本 |
| 响应式 | 375px - 1920px 全适配 |
| 代码质量 | TypeScript 严格模式，ESint + Prettier |

---

## 10. 开发里程碑

### M1：项目初始化（基础设施）

- [ ] Next.js + TypeScript + Tailwind CSS 项目搭建
- [ ] 全局样式与 CSS 变量定义
- [ ] 字体加载（Inter / SF Pro 替代）
- [ ] 导航栏 + 页脚布局组件
- [ ] Mock 数据文件编写

### M2：首页

- [ ] Hero 区域（大标题 + 副标题 + CTA）
- [ ] 精选文章卡片区块
- [ ] 滚动入场动画

### M3：个人介绍页

- [ ] 头部 Hero（头像 + 姓名）
- [ ] 关于我文字区块
- [ ] 技能网格
- [ ] 经历时间线
- [ ] 联系方式区块

### M4：文章列表页

- [ ] 页面标题 + 文章计数
- [ ] 标签筛选栏（客户端筛选）
- [ ] 文章卡片网格
- [ ] 响应式布局

### M5：文章详情页

- [ ] 文章头部信息（标题、日期、标签、阅读时长）
- [ ] Markdown 渲染 + 代码高亮
- [ ] 右侧目录导航（桌面端）
- [ ] 上一篇 / 下一篇导航

### M6：打磨与优化

- [ ] Lighthouse 性能优化（图片、字体、代码分割）
- [ ] SEO 配置（metadata, sitemap, og image）
- [ ] 无障碍检查
- [ ] 移动端细节调整
- [ ] `prefers-reduced-motion` 适配

---

## 11. 不在 MVP 范围内

以下功能明确排除在 MVP 之外，后续迭代再考虑：

- ❌ 暗色模式切换（CSS 变量预留，不做切换逻辑）
- ❌ 文章全文搜索
- ❌ 评论系统
- ❌ RSS 订阅
- ❌ 后台管理 / CMS
- ❌ 用户登录 / 权限
- ❌ 国际化
- ❌ 数据库 / API
- ❌ 访问统计

---

## 12. 验收标准

| 编号 | 验收项 | 标准 |
| --- | --- | --- |
| AC-01 | 首页加载 | 首屏 LCP < 2s，Hero 正常展示 |
| AC-02 | 导航 | 导航栏在所有页面正常显示，滚动毛玻璃效果生效 |
| AC-03 | 个人介绍页 | 所有区块正确渲染，滚动动画流畅 |
| AC-04 | 文章列表 | 卡片正确展示，标签筛选功能正常 |
| AC-05 | 文章详情 | Markdown 正确渲染，代码高亮正常，目录可用 |
| AC-06 | 响应式 | 375px / 768px / 1440px 三个断点下布局正常 |
| AC-07 | 动画 | 滚动入场动画流畅，`prefers-reduced-motion` 下禁用 |
| AC-08 | 视觉一致性 | 整体观感接近 Apple 官网风格（大留白、大字体、克制动效） |

---

*本文档随开发进展持续更新。*
