import { TBlogFrontmatter } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BLOG_DIR } from '../constants';

export function getAllBlogTopic(): string[] {
  const files = fs.readdirSync(BLOG_DIR);
  const topics = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(file);
    const data = parsed.data as TBlogFrontmatter;
    return data.categories.map((topic) => topic.toLowerCase().trim());
  });
  return [...new Set(topics.flat())];
}
