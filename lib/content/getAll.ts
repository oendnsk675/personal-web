import { TBlogFrontmatter, TBlogMarkdown, TBlogPaginated } from '@/types/blog';
import { TNoteFrontmatter, TNotePaginated } from '@/types/notes';
import { TPaginationQuery } from '@/types/pagination';
import { TProjectFrontmatter, TProjectPaginated } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BLOG_DIR, NOTE_DIR, PROJECT_DIR } from '../constants';
import { getMetadataBlogs } from '../supabase/queries/blog';
import { matchTitle } from '../utils';

export async function getAllBlogs({
  page = 1,
  limit = 10,
  filter = { title: '', topic: '' },
  sort = 'asc',
  sortBy = 'views',
}: TPaginationQuery): Promise<TBlogPaginated> {
  let data: TBlogMarkdown[] = [];
  const { title, topic } = filter;

  if (sortBy == 'views') {
    const blogs = await getMetadataBlogs(limit, page, sort, sortBy);

    data = blogs
      .map(({ slug, views, likes }) => {
        const filePath = path.join(BLOG_DIR, `${slug}.md`);

        if (!fs.existsSync(filePath)) {
          return null;
        }

        const file = fs.readFileSync(filePath, 'utf-8');
        const parsed = matter(file);

        const frontmatter = parsed.data as TBlogFrontmatter;

        if (title && !matchTitle(frontmatter.title, title)) {
          return null;
        }

        if (topic && !frontmatter.categories.includes(topic)) {
          return null;
        }

        return {
          ...frontmatter,
          slug,
          content: parsed.content,
          views,
          likes,
        };
      })
      .filter(Boolean) as TBlogMarkdown[];
  } else {
    const files = fs.readdirSync(BLOG_DIR);

    const blogs = files
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

    // --- ORDERING ---
    blogs.sort((a, b) =>
      sort === 'asc'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
    );

    // --- PAGINATION ---
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    data = blogs.slice(startIndex, endIndex);
  }

  return {
    data,
    meta: {
      page,
      limit,
      total: data.length, // bisa diganti count dari Supabase
      totalPages: Math.ceil(data.length / limit),
    },
  };
}

export function getAllProjects({
  page = 1,
  limit = 10,
  sort = 'asc',
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
    sort === 'asc'
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
  sort = 'asc',
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
    sort === 'asc'
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
