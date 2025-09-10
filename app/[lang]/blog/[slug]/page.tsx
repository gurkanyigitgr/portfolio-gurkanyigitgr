import React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { Language, translations } from "@/lib/i18n";
import MDXComponents from "@/components/mdx/MDXComponents";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: {
    lang: Language;
    slug: string;
  };
}

export async function generateStaticParams({
  params,
}: {
  params: { lang: Language };
}) {
  const posts = getAllPosts(params.lang);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: BlogPostProps) {
  const { lang, slug } = params;
  const post = getPostBySlug(slug, lang);
  const t = translations[lang];

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#030014] py-10">
      <div className="max-w-4xl mx-auto px-4 mt-24 md:mt-32">
        <div className="mb-8">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToBlog}
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-6">
            <time className="text-lg">
              {t.publishedOn} {post.date}
            </time>
            <span className="hidden sm:block">•</span>
            <span className="text-lg">{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="mdx-content prose prose-invert max-w-none">
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToBlog}
          </Link>
        </div>
      </div>
    </main>
  );
}
