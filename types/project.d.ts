import { TPaginated } from './pagination';

export type TProjectFrontmatter = {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  role: string;
  links: {
    code?: string;
    live?: string;
    video?: string;
  };
  date: string;
};

export type TProjectMarkdown = TProjectFrontmatter & {
  content: string;
};

export type TProjectPaginated = TPaginated<TProjectMarkdown>;
