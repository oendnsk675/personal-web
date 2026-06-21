import { TPaginated } from './pagination';

export type TBlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  slug: string;
  categories: string[];
};

export type TBlogMarkdown = TBlogFrontmatter & {
  content: string;
  views?: number;
  likes?: number;
};

export type TBlogPaginated = TPaginated<TBlogMarkdown>;

export type TBlogSort = 'asc' | 'desc';
export type TBlogSortBy = 'views' | 'dates' | 'title';
export type TBlogFilter = {
  title?: string;
  topic?: string;
};
