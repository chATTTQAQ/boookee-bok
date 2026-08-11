export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月",
  ];
  return `${date.getFullYear()} 年 ${months[date.getMonth()]} ${date.getDate()} 日`;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  // 动态导入避免循环依赖
  const { posts } = require("@/data/posts");
  posts.forEach((post: { tags: string[] }) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}
