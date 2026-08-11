"use client";

import { useState, useMemo } from "react";
import { posts } from "@/data/posts";
import ArticleCard from "@/components/article/ArticleCard";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";

export default function ArticlesPage() {
  const [activeTag, setActiveTag] = useState<string>("全部");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return ["全部", ...Array.from(tagSet)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeTag === "全部") return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-section">
      <Reveal>
        <h1 className="text-display tracking-tight text-text-primary">
          Articles
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          共 {posts.length} 篇文章
        </p>
      </Reveal>

      {/* Tag Filter */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </div>
      </Reveal>

      {/* Article Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.05}>
            <ArticleCard post={post} />
          </Reveal>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-20 text-center text-lg text-text-secondary">
          没有找到相关文章。
        </p>
      )}
    </div>
  );
}
