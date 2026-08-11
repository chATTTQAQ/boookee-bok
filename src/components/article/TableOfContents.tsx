"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // 从 DOM 中提取标题
    const article = document.querySelector(".prose");
    if (!article) return;

    const elements = Array.from(
      article.querySelectorAll("h2, h3")
    ) as HTMLElement[];

    const items: TocItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block">
      <p className="mb-4 text-sm font-semibold text-text-primary">目录</p>
      <ul className="space-y-2 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 ${
                heading.level === 3 ? "ml-4" : "ml-0"
              } ${
                activeId === heading.id
                  ? "text-accent font-medium"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              style={{ paddingLeft: heading.level === 3 ? "1rem" : "0.75rem" }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
