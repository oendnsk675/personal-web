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
};

export type TBlogPaginated = TPaginated<TBlogMarkdown>;
