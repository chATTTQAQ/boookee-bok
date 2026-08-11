import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Link href={`/articles/${post.slug}`}>
      <article className="group h-full overflow-hidden rounded-apple bg-card border border-border transition-all duration-300 ease-apple hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <div className={`h-40 bg-gradient-to-br ${post.coverGradient}`} />
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {post.summary}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-text-secondary">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              {post.readingTime} 分钟
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
