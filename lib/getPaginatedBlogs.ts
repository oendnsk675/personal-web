import { getAllBlogs } from './getAllBlogs';

export function getPaginatedBlogs(page: number, perPage: number = 5) {
  const blogs = getAllBlogs();

  const total = blogs.length;
  const totalPages = Math.ceil(total / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const data = blogs.slice(start, end);

  return {
    data,
    total,
    totalPages,
  };
}
