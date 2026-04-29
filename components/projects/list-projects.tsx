import { TBlogFilter, TBlogSortBy } from '@/types/blog';
import CardBlog from '../card-blog';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { getAllProjects } from '@/lib/content/getAll';
import CardProject from '../card-projects';

export default async function ListProject({
  page,
  sortBy,
  filter,
}: {
  page: number;
  sortBy: TBlogSortBy;
  filter?: TBlogFilter;
}) {
  const { data: projects, meta } = getAllProjects({
    page,
    limit: 10,
    sort: 'desc',
    sortBy,
    filter
  });

  const { totalPages } = meta;

  return (
    <>
      {projects.map((project, index) => (
        <CardProject data={project} index={index} key={index} />
      ))}
      {/* paggination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                disabled={page === 1}
                href={`/blogs?page=${page - 1}`}
              />
            </PaginationItem>
            <PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => {
                return totalPages > 5 &&
                  index === Math.ceil(totalPages / 2) - 1 ? (
                  <PaginationEllipsis key={index} />
                ) : (
                  <PaginationLink
                    className={index + 1 === page ? 'bg-accent' : ''}
                    key={index}
                    href={`/blogs?page=${index + 1}`}
                  >
                    {index + 1}
                  </PaginationLink>
                );
              })}
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                disabled={page === totalPages}
                href={`/blogs?page=${page + 1}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
