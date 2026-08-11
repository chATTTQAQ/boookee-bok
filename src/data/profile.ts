import type { Profile } from "@/types";

export const profile: Profile = {
  name: "林书远",
  title: "独立开发者 · 写字的人",
  tagline: "用代码构建产品，用文字记录思考。",
  avatar: "",
  bio: [
    "你好，我是林书远，一名前端开发者，热衷于用技术创造有价值的产品。",
    "工作之余，我喜欢写写技术笔记和生活随笔，分享踩过的坑和想明白的事。相信好的产品源于对细节的执着，好的文字源于对生活的真诚。",
    "这个博客是我的一片自留地，记录技术探索、产品思考，以及那些值得停下来写一写的瞬间。",
  ],
  social: {
    email: "hello@boookee.cn",
    github: "https://github.com/boookee",
    twitter: "https://twitter.com/boookee",
  },
  experiences: [
    {
      year: "2024 — 至今",
      title: "独立开发者",
      organization: "自由职业",
      description: "独立开发并上线多个 Web 产品，专注于 React 生态和用户体验优化。",
    },
    {
      year: "2021 — 2024",
      title: "高级前端工程师",
      organization: "某科技公司",
      description: "负责核心产品的前端架构设计、性能优化和团队技术建设。",
    },
    {
      year: "2019 — 2021",
      title: "前端工程师",
      organization: "某创业公司",
      description: "从 0 到 1 搭建产品前端，落地多个核心业务模块。",
    },
    {
      year: "2018",
      title: "计算机科学学士",
      organization: "某大学",
      description: "在校期间专注于 Web 开发和人机交互，毕业后正式进入前端领域。",
    },
  ],
};
