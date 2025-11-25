import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { truncateText } from './utils';

const BLOG_DIR = path.join(process.cwd(), 'articles');

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR);

  const blogs = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(file);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: truncateText(matterResult.data.description, 100),
      thumbnail: matterResult.data.thumbnail,
      slug: filename.replace('.md', ''),
      categories: matterResult.data.categories,
      content: matterResult.content,
    };
  });

  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}
