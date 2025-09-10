import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Language } from "./i18n";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  lang: Language;
}

export function getAllPosts(lang: Language): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "content", lang);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const readTimeResult = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        readTime: readTimeResult.text,
        tags: data.tags || [],
        content,
        lang,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string, lang: Language): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), "content", lang, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const readTimeResult = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: readTimeResult.text,
      tags: data.tags || [],
      content,
      lang,
    };
  } catch (error) {
    return null;
  }
}
