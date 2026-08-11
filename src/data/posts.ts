import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "why-i-build-a-blog-with-nextjs",
    title: "为什么我用 Next.js 从零搭建个人博客",
    summary: "从技术选型到架构设计，聊聊我为什么选择 Next.js 而不是传统的静态站点生成器，以及这套方案带来的取舍。",
    coverGradient: "from-blue-500 to-cyan-400",
    tags: ["Next.js", "技术选型"],
    publishedAt: "2026-08-10",
    readingTime: 6,
    featured: true,
    content: `## 前言

搭建个人博客这件事，我犹豫了很久。市面上有 hexo、hugo、gatsby 一堆方案，为什么最后选了 Next.js 从头写？

答案很简单：**控制力**。

## 为什么不用现成的方案

Hexo 和 Hugo 很好，开箱即用，主题丰富。但问题在于——你是在用别人的设计语言。我想让博客看起来像 Apple 官网，每一处间距、每一个动画都自己说了算。用主题框架改起来反而比从头写更痛苦。

## Next.js 给了我什么

### 1. App Router 的文件路由

\`\`\`typescript
// src/app/articles/[slug]/page.tsx
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
\`\`\`

文件即路由，直观且强大。静态生成所有文章页，部署到 Vercel 后全球 CDN 加速。

### 2. React Server Components

文章内容可以在构建时渲染，客户端只需要接收 HTML。首屏加载极快，LCP 基本控制在 1 秒以内。

### 3. 生态完整

Tailwind CSS 做样式，Framer Motion 做动画，lucide-react 做图标——React 生态里想用什么都有。

## 取舍

当然，从头写意味着更多的工作量。但如果博客本身就是一个展示自己技术品味的作品，那这些工作量是值得的。

> 好的产品不在于功能多少，而在于每个细节都经得起推敲。

## 总结

Next.js + Tailwind CSS + Framer Motion，这套组合给了我足够的自由度去实现想要的设计，同时保持了优秀的性能。如果你也在纠结博客技术选型，希望这篇文章能给你一些参考。`,
  },
  {
    slug: "apple-design-principles-in-web",
    title: "苹果设计原则在 Web 中的实践",
    summary: "大留白、克制动效、内容驱动——苹果官网的设计语言如何应用到个人博客中。从色彩到排版到动画的完整拆解。",
    coverGradient: "from-gray-700 to-gray-400",
    tags: ["设计", "UI/UX"],
    publishedAt: "2026-08-08",
    readingTime: 8,
    featured: true,
    content: `## 苹果设计的核心

如果你仔细观察 apple.com，会发现几个反复出现的设计原则：

1. **极致的留白** — 内容之间永远有充足的呼吸空间
2. **克制的动效** — 动画存在是为了引导注意力，不是炫技
3. **字体即设计** — 大标题本身就是视觉焦点
4. **色彩的节制** — 大面积中性色，强调色只在关键位置出现

## 在博客中的实践

### 色彩系统

\`\`\`css
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F5F5F7;
--color-text-primary: #1D1D1F;
--color-text-secondary: #6E6E73;
--color-accent: #0071E3;
\`\`\`

这组色彩直接取自 Apple 官网。大面积白色背景配合 \`#F5F5F7\` 的浅灰区块，营造出干净通透的质感。

### 排版

正文 17px / 1.75 行高，这个数值不是随便选的——这是 Apple Newsroom 的排版标准。在 Web 上，17px 是保证长文阅读舒适性的下限。

### 间距

区块之间用 120px 的间距（Apple 标志性的大留白），区块内部用 48px。这个间距系统让页面看起来"贵"。

### 动画

\`\`\`typescript
// 滚动入场动画
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// 缓动函数
const transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};
\`\`\`

所有动画使用同一个缓动曲线 \`cubic-bezier(0.4, 0, 0.2, 1)\`，时长不超过 0.8s。

## 总结

Apple 的设计语言之所以耐看，是因为它**把克制做到了极致**。在个人博客中实践这些原则，不需要复杂的技术，需要的只是审美上的自律。`,
  },
  {
    slug: "my-development-workflow-2026",
    title: "我的 2026 年开发工作流",
    summary: "从编辑器到部署，分享我目前每天都在用的开发工具链和工作流程。包括 Neovim、pnpm、Vercel 等。",
    coverGradient: "from-purple-500 to-pink-400",
    tags: ["效率", "工具"],
    publishedAt: "2026-08-05",
    readingTime: 5,
    featured: true,
    content: `## 我的日常工具链

2026 年了，开发工具变化不少，但核心原则没变：**减少摩擦，保持心流**。

## 编辑器：VS Code + Neovim

主力还是 VS Code，但配了 Neovim 插件做编辑。两全其美：VS Code 的生态 + Vim 的编辑效率。

关键插件：
- ESLint — 实时检查
- Tailwind CSS IntelliSense — 类名自动补全
- Error Lens — 行内显示错误

## 包管理：pnpm

快、省磁盘空间、monorepo 友好。没有理由不用。

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

## 版本控制：Git + GitHub

没什么特别的，但有个小习惯：每个 commit message 都写清楚"做了什么"和"为什么做"。

\`\`\`bash
git commit -m "feat: add scroll-triggered animation to Hero section

- Use Framer Motion whileInView
- Stagger child elements by 0.1s
- Respect prefers-reduced-motion"
\`\`\`

## 部署：Vercel

Push 到 GitHub 自动部署，预览环境、生产环境一条龙。个人项目用免费额度完全够了。

## 总结

工具是手段不是目的。最好的工作流是那个你不需要思考就能用的工作流。`,
  },
  {
    slug: "understanding-react-server-components",
    title: "深入理解 React Server Components",
    summary: "RSC 到底解决了什么问题？和 SSR 有什么区别？这篇文章从原理到实践，帮你彻底搞清楚。",
    coverGradient: "from-teal-500 to-green-400",
    tags: ["React", "Next.js"],
    publishedAt: "2026-08-01",
    readingTime: 10,
    featured: false,
    content: `## RSC 是什么

React Server Components 是 React 18 引入的特性，允许组件在服务端渲染，并且**不发送 JavaScript 到客户端**。

这和 SSR 不一样。SSR 是在服务端渲染 HTML，但组件的 JavaScript 仍然会发送到客户端进行 hydration。RSC 则是组件的代码根本不会出现在客户端 bundle 里。

## 解决了什么问题

### 1. Bundle 大小

传统 React 应用，所有组件代码都会被打包到客户端。用了三个图标库？全部进 bundle。RSC 让你可以在服务端用任何库，客户端零负担。

### 2. 直接访问后端资源

Server Components 可以直接读取数据库、文件系统，不需要写 API 中间层。

\`\`\`typescript
// Server Component — 直接读文件
async function ArticleList() {
  const articles = await db.query('SELECT * FROM articles');
  return articles.map(a => <ArticleCard key={a.id} {...a} />);
}
\`\`\`

### 3. SEO 友好

服务端渲染的 HTML 直接被搜索引擎抓取，不需要额外的 SSR 配置。

## 和 SSR 的区别

| 维度 | SSR | RSC |
| --- | --- | --- |
| 渲染时机 | 请求时 | 构建时 / 请求时 |
| JS 发送到客户端 | 是 | 否（Server Component） |
| Hydration | 需要 | 不需要（Server Component） |
| 状态 | 无（每次重新渲染） | 无（Server Component） |

## 在 Next.js App Router 中使用

App Router 默认所有组件都是 Server Component。需要客户端交互时，用 \`"use client"\` 声明。

\`\`\`typescript
// Server Component（默认）
export default function Page() {
  return <Hero />;  // 可以直接 async
}

// Client Component
"use client";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return <button onClick={() => setDark(!dark)}>Toggle</button>;
}
\`\`\`

## 总结

RSC 不是 SSR 的替代品，而是补充。理解了"哪些代码需要在客户端运行"这个核心问题，就能合理地划分 Server / Client Components。`,
  },
  {
    slug: "css-variables-design-system",
    title: "用 CSS 变量构建设计系统",
    summary: "不需要 Storybook，不需要设计 token 工具，用原生 CSS 变量就能搭建一套灵活的设计系统。",
    coverGradient: "from-orange-500 to-yellow-400",
    tags: ["CSS", "设计"],
    publishedAt: "2026-07-28",
    readingTime: 4,
    featured: false,
    content: `## 为什么用 CSS 变量

CSS 自定义属性（CSS Variables）是构建设计系统最轻量的方案。相比 Sass 变量，它有三个优势：

1. **运行时可变** — JavaScript 可以动态修改
2. **继承机制** — 可以在子元素覆盖父元素的值
3. **零构建成本** — 浏览器原生支持

## 定义设计 Token

\`\`\`css
:root {
  /* 色彩 */
  --color-bg-primary: #FFFFFF;
  --color-text-primary: #1D1D1F;
  --color-accent: #0071E3;

  /* 间距 */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
}
\`\`\`

## 在 Tailwind 中使用

在 \`tailwind.config.ts\` 中映射 CSS 变量：

\`\`\`typescript
colors: {
  accent: "var(--color-accent)",
}
\`\`\`

这样 \`bg-accent\` 就会使用 \`var(--color-accent)\`，切换主题时只需要改 CSS 变量的值。

## 暗色模式预留

\`\`\`css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #000000;
    --color-text-primary: #F5F5F7;
  }
}
\`\`\`

所有使用 CSS 变量的组件自动适配，不需要改任何组件代码。

## 总结

CSS 变量 + Tailwind 的组合，是中小型项目搭建设计系统的最佳实践。简单、灵活、零额外依赖。`,
  },
  {
    slug: "writing-well-as-a-developer",
    title: "作为一个开发者，如何写好文章",
    summary: "写代码和写文章其实是同一件事：把复杂的东西讲清楚。分享我写技术文章的几个原则。",
    coverGradient: "from-rose-500 to-pink-400",
    tags: ["写作", "随笔"],
    publishedAt: "2026-07-20",
    readingTime: 5,
    featured: false,
    content: `## 写作和编程的相似性

写代码的时候，你在做三件事：
1. 理解问题
2. 拆解问题
3. 用清晰的方式表达解决方案

写文章也是一样。区别只是媒介从代码变成了文字。

## 三个原则

### 1. 先写给未来的自己

不要假设读者什么都懂，也不要假设读者什么都不懂。最好的状态是：写给三个月后的自己看——那时候你已经忘了细节，但还记得大方向。

### 2. 一个段落一个观点

技术文章最常见的错误是一个段落塞了三个观点。读者读到一半就丢了线索。每段开头一句话总结这段要说什么，后面的内容都是支撑这句话的。

### 3. 代码是论据不是装饰

\`\`\`typescript
// 好的代码示例：直接展示核心逻辑
const sorted = users.sort((a, b) => a.age - b.age);
\`\`\`

不要贴大段完整的文件。只展示能说明你观点的那几行。就像写议论文不会把整个参考资料原文抄进去一样。

## 总结

好的技术写作不在于文采，而在于**清晰**。把复杂的事情说简单，把模糊的事情说具体，这就够了。`,
  },
];
