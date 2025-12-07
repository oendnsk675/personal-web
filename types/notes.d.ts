import { TPaginated } from './pagination';

export type TNoteFrontmatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  categories: string[];
};

export type TNoteMarkdown = TNoteFrontmatter & {
  content: string;
};

export type TNotePaginated = TPaginated<TNoteMarkdown>;
