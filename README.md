# boookee-bok

> 一个简洁、专注内容的个人博客。

## 项目简介

boookee-bok 是一个个人博客项目，旨在提供干净、快速的阅读与写作体验。不追求花哨的功能，只求把"写文章、看文章"这件事做好。

## 核心特性

- **Markdown 写作** — 用 Markdown 写作，所见即所得
- **响应式设计** — 桌面、平板、手机都能舒适阅读
- **极速加载** — 静态生成，页面秒开
- **暗色模式** — 护眼夜间阅读
- **文章归档** — 按时间、标签分类整理
- **RSS 订阅** — 方便读者追踪更新

## 技术栈

| 层级     | 技术（拟选）         | 说明                     |
| -------- | -------------------- | ------------------------ |
| 框架     | Next.js              | React 全栈框架，SSG/SSR  |
| 样式     | Tailwind CSS         | 原子化 CSS，快速开发     |
| 内容     | MDX + Contentlayer   | Markdown 增强，支持组件  |
| 部署     | Vercel / Cloudflare  | 边缘网络，全球加速       |
| 评论     | Giscus / Waline      | 轻量评论系统             |
| 分析     | Vercel Analytics     | 简单的访问统计           |

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/<your-username>/boookee-bok.git
cd boookee-bok

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览生产版本
npm run start
```

## 目录结构

```
boookee-bok/
├── content/          # 博客文章 (MDX)
│   ├── posts/        # 文章正文
│   └── pages/        # 自定义页面
├── public/           # 静态资源 (图片等)
├── src/
│   ├── components/   # UI 组件
│   ├── layouts/      # 页面布局
│   ├── lib/          # 工具函数
│   ├── pages/        # 路由页面 (App Router)
│   └── styles/       # 全局样式
├── .workbuddy/       # 项目配置
└── README.md
```

## 写作指南

1. 在 `content/posts/` 下新建 `.mdx` 文件
2. 添加 Frontmatter 元信息：

```yaml
---
title: "文章标题"
date: "2026-08-11"
tags: ["随笔", "技术"]
summary: "一句话摘要，用于列表和 SEO"
draft: false
---
```

3. 用 Markdown 写正文，需要时可直接嵌入 React 组件
4. 保存后开发服务器自动热更新

## 部署

### Vercel（推荐）

1. 将仓库推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动识别 Next.js，一键部署

### Cloudflare Pages

1. 构建命令：`npm run build`
2. 输出目录：`.next`
3. 按提示完成配置

## 开发计划

- [ ] 项目初始化与基础架构搭建
- [ ] 首页文章列表
- [ ] 文章详情页与 MDX 渲染
- [ ] 标签与归档系统
- [ ] 暗色模式切换
- [ ] RSS 订阅源
- [ ] 评论系统集成
- [ ] SEO 优化（sitemap, og image）
- [ ] 移动端适配与细节打磨

## License

MIT — 随意使用，注明来源即可。

---

*这个项目才刚开始，慢慢来。*
