import { TBlogFrontmatter, TBlogPaginated } from '@/types/blog';
import { TNoteFrontmatter, TNotePaginated } from '@/types/notes';
import { TPaginationQuery } from '@/types/pagination';
import { TProjectFrontmatter, TProjectPaginated } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BLOG_DIR, NOTE_DIR, PROJECT_DIR } from '../constants';

export function getAllBlogs({
  page = 1,
  limit = 10,
  order = 'asc',
}: TPaginationQuery): TBlogPaginated {
  const files = fs.readdirSync(BLOG_DIR);

  let data = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(file);

    const data = parsed.data as TBlogFrontmatter;
    const content = parsed.content;
    const slug = filename.replace('.md', '');

    return {
      ...data,
      slug,
      content,
    };
  });

  // --- ORDERING ---
  data.sort((a, b) =>
    order === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  // --- PAGINATION ---
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  data = data.slice(startIndex, endIndex);

  return {
    data,
    meta: {
      page,
      limit,
      total: data.length,
      totalPages: Math.ceil(data.length / limit),
    },
  };
}

export function getAllProjects({
  page = 1,
  limit = 10,
  order = 'asc',
}: TPaginationQuery): TProjectPaginated {
  const files = fs.readdirSync(PROJECT_DIR);

  let data = files.map((filename) => {
    const filePath = path.join(PROJECT_DIR, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(file);
    const data = parsed.data as TProjectFrontmatter;
    const content = parsed.content;
    const slug = filename.replace('.md', '');

    return {
      ...data,
      slug,
      content,
    };
  });

  // --- ORDERING ---
  data.sort((a, b) =>
    order === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  // --- PAGINATION ---
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  data = data.slice(startIndex, endIndex);

  return {
    data,
    meta: {
      page,
      limit,
      total: data.length,
      totalPages: Math.ceil(data.length / limit),
    },
  };
}

export function getAllNotes({
  page = 1,
  limit = 10,
  order = 'asc',
}: TPaginationQuery): TNotePaginated {
  const files = fs.readdirSync(NOTE_DIR);

  let data = files.map((filename) => {
    const filePath = path.join(NOTE_DIR, filename);
    const file = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(file);
    const data = parsed.data as TNoteFrontmatter;
    const content = parsed.content;
    const slug = filename.replace('.md', '');

    return {
      ...data,
      slug,
      content,
    };
  });

  // --- ORDERING ---
  data.sort((a, b) =>
    order === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  // --- PAGINATION ---
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  data = data.slice(startIndex, endIndex);

  return {
    data,
    meta: {
      page,
      limit,
      total: data.length,
      totalPages: Math.ceil(data.length / limit),
    },
  };
}
