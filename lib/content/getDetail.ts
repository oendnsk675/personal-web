import { TBlogFrontmatter, TBlogMarkdown } from '@/types/blog';
import { TNoteFrontmatter, TNoteMarkdown } from '@/types/notes';
import { TProjectFrontmatter, TProjectMarkdown } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BLOG_DIR, NOTE_DIR, PROJECT_DIR } from '../constants';

export const getDetailArticle = (slug: string): TBlogMarkdown => {
  const filePath = path.join(BLOG_DIR, slug);
  const file = fs.readFileSync(`${filePath}.md`, 'utf8');
  const parsed = matter(file);
  const data = parsed.data as TBlogFrontmatter;
  const content = parsed.content;

  return {
    ...data,
    content,
  };
};

export const getDetailProject = (slug: string): TProjectMarkdown => {
  const filePath = path.join(PROJECT_DIR, slug);
  const file = fs.readFileSync(`${filePath}.md`, 'utf8');
  const parsed = matter(file);
  const data = parsed.data as TProjectFrontmatter;
  const content = parsed.content;

  return {
    ...data,
    content,
  };
};

export const getDetailNote = (slug: string): TNoteMarkdown => {
  const filePath = path.join(NOTE_DIR, slug);
  const file = fs.readFileSync(`${filePath}.md`, 'utf8');
  const parsed = matter(file);
  const data = parsed.data as TNoteFrontmatter;
  const content = parsed.content;

  return {
    ...data,
    content,
  };
};
