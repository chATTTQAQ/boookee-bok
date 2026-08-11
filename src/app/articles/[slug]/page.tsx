import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import ArticleContent from "@/components/article/ArticleContent";
import TableOfContents from "@/components/article/TableOfContents";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: `${post.title} — boookee`,
    description: post.summary,
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 pt-40 pb-section text-center">
        <h1 className="text-display text-text-primary">文章未找到</h1>
        <Link
          href="/articles"
          className="mt-6 inline-flex items-center gap-2 text-accent"
        >
          <ArrowLeft size={18} />
          返回文章列表
        </Link>
      </div>
    );
  }

  const currentIndex = posts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="pt-28">
      {/* Article Header */}
      <header className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            返回文章列表
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-display tracking-tight text-text-primary">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-text-secondary">{post.summary}</p>

          <div className="mt-6 flex items-center gap-4 text-sm text-text-secondary">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingTime} 分钟阅读</span>
          </div>
        </Reveal>
      </header>

      {/* Cover */}
      <Reveal delay={0.1}>
        <div
          className={`mx-auto mt-10 h-64 max-w-5xl rounded-apple bg-gradient-to-br ${post.coverGradient}`}
        />
      </Reveal>

      {/* Content + TOC */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_220px]">
          <article>
            <ArticleContent content={post.content} />
          </article>
          <aside>
            <TableOfContents content={post.content} />
          </aside>
        </div>
      </div>

      {/* Prev / Next */}
      <nav className="mx-auto mt-section max-w-3xl border-t border-border px-6 pt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {prevPost && (
            <Link
              href={`/articles/${prevPost.slug}`}
              className="group rounded-apple border border-border p-5 transition-all duration-300 ease-apple hover:border-accent"
            >
              <span className="flex items-center gap-1 text-sm text-text-secondary">
                <ChevronLeft size={16} />
                上一篇
              </span>
              <p className="mt-2 font-medium text-text-primary group-hover:text-accent transition-colors">
                {prevPost.title}
              </p>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/articles/${nextPost.slug}`}
              className="group rounded-apple border border-border p-5 text-right transition-all duration-300 ease-apple hover:border-accent sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1 text-sm text-text-secondary">
                下一篇
                <ChevronRight size={16} />
              </span>
              <p className="mt-2 font-medium text-text-primary group-hover:text-accent transition-colors">
                {nextPost.title}
              </p>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
