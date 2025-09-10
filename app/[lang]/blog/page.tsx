import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Language, translations } from "@/lib/i18n";

interface BlogPageProps {
  params: {
    lang: Language;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { lang } = params;
  const posts = getAllPosts(lang);
  const t = translations[lang];

  return (
    <main className="w-full">
      <div className="flex flex-col items-center justify-center px-4 mt-24 md:mt-32">
        <div className="py-8">
          <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6 text-center pb-4">
            {t.blog}
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto text-lg">
            {t.blogDescription}
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-xl">
                {lang === "tr" ? "Henüz yazı yok." : "No posts yet."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-transparent border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/10">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <time>{post.date}</time>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {post.title}
                      </h2>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
                        {t.readMore}
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
