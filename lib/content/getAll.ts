import { TBlogFrontmatter, TBlogMarkdown, TBlogPaginated } from '@/types/blog';
import { TNoteFrontmatter, TNoteMarkdown, TNotePaginated } from '@/types/notes';
import { TPaginationQuery } from '@/types/pagination';
import {
  TProjectFrontmatter,
  TProjectMarkdown,
  TProjectPaginated,
} from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BLOG_DIR, NOTE_DIR, PROJECT_DIR } from '../constants';
import { getMetadataBlogsBySlugs } from '../supabase/queries/blog';
import { matchTitle } from '../utils';

export async function getAllBlogs({
  page = 1,
  limit = 10,
  filter = { title: '', topic: '' },
  sort = 'asc',
  sortBy = 'views',
}: TPaginationQuery): Promise<TBlogPaginated> {
  const { title, topic } = filter;

  const files = fs.readdirSync(BLOG_DIR);

  let data = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const file = fs.readFileSync(filePath, 'utf-8');
      const parsed = matter(file);
      const frontmatter = parsed.data as TBlogFrontmatter;
      const content = parsed.content;
      const slug = filename.replace('.md', '');

      if (title && !matchTitle(frontmatter.title, title)) {
        return null;
      }

      if (topic && !frontmatter.categories.includes(topic)) {
        return null;
      }

      return {
        ...frontmatter,
        slug,
        content,
      };
    })
    .filter(Boolean) as TBlogMarkdown[];

  const metadata = await getMetadataBlogsBySlugs(data.map((blog) => blog.slug));
  const metadataBySlug = new Map(metadata.map((item) => [item.slug, item]));

  data = data.map((blog) => {
    const meta = metadataBySlug.get(blog.slug);

    return {
      ...blog,
      views: meta?.views ?? 0,
      likes: meta?.likes ?? 0,
    };
  });

  // --- ORDERING ---
  if (sortBy == 'views') {
    data.sort((a, b) =>
      sort === 'asc'
        ? (a.views ?? 0) - (b.views ?? 0)
        : (b.views ?? 0) - (a.views ?? 0),
    );
  } else if (sortBy == 'title') {
    data.sort((a, b) =>
      sort === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );
  } else if (sortBy == 'dates') {
    data.sort((a, b) =>
      sort === 'asc'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
    );
  }

  const total = data.length;

  // --- PAGINATION ---
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  data = data.slice(startIndex, endIndex);

  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export function getAllProjects({
  page = 1,
  limit = 10,
  sort = 'asc',
  sortBy = 'title',
  filter = { title: '', topic: '' },
}: TPaginationQuery): TProjectPaginated {
  const files = fs.readdirSync(PROJECT_DIR);
  const { title, topic } = filter;

  let data = files
    .map((filename) => {
      const filePath = path.join(PROJECT_DIR, filename);
      const file = fs.readFileSync(filePath, 'utf-8');
      const parsed = matter(file);
      const frontmatter = parsed.data as TBlogFrontmatter;
      const data = parsed.data as TProjectFrontmatter;
      const content = parsed.content;
      const slug = filename.replace('.md', '');

      if (title && !matchTitle(frontmatter.title, title)) {
        return null;
      }

      return {
        ...data,
        slug,
        content,
      };
    })
    .filter(Boolean) as TProjectMarkdown[];

  // --- ORDERING ---
  if (sortBy == 'title') {
    data.sort((a, b) =>
      sort === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );
  } else if (sortBy == 'dates') {
    data.sort((a, b) =>
      sort === 'asc'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
    );
  }

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
  sort = 'asc',
  filter = { title: '', topic: '' },
}: TPaginationQuery): TNotePaginated {
  const files = fs.readdirSync(NOTE_DIR);

  let data = files
    .map((filename) => {
      const filePath = path.join(NOTE_DIR, filename);
      const file = fs.readFileSync(filePath, 'utf-8');
      const parsed = matter(file);
      const data = parsed.data as TNoteFrontmatter;
      const content = parsed.content;
      const slug = filename.replace('.md', '');

      if (filter.title && !matchTitle(data.title, filter.title)) {
        return null;
      }

      return {
        ...data,
        slug,
        content,
      };
    })
    .filter(Boolean) as TNoteMarkdown[];

  // --- ORDERING ---
  data.sort((a, b) =>
    sort === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title),
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
