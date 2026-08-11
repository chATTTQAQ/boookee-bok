import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedPosts() {
  const featured = posts.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-section">
      <Reveal>
        <h2 className="text-heading tracking-tight text-text-primary">
          精选文章
        </h2>
        <p className="mt-3 text-lg text-text-secondary">
          一些值得读的文章。
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.1}>
            <Link href={`/articles/${post.slug}`}>
              <article className="group h-full overflow-hidden rounded-apple bg-card border border-border transition-all duration-300 ease-apple hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                {/* 封面渐变 */}
                <div
                  className={`h-48 bg-gradient-to-br ${post.coverGradient}`}
                />
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
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors duration-200">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
