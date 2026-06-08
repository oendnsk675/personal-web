import { TBlogFilter, TBlogSortBy } from '@/types/blog';
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
import ListProjectsMotion from './list-projects-motion';

export default async function ListProject({
  page,
  sortBy,
  filter,
}: {
  page: number;
  sortBy: TBlogSortBy;
  filter?: TBlogFilter;
}) {
  await new Promise((resolve) => setTimeout(resolve, 180));

  const { data: projects, meta } = getAllProjects({
    page,
    limit: 10,
    sort: 'desc',
    sortBy,
    filter,
  });

  const { totalPages } = meta;

  return (
    <ListProjectsMotion>
      {projects.map((project, index) => (
        <CardProject data={project} index={index} key={project.slug} />
      ))}
      {/* paggination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                disabled={page === 1}
                href={`/projects?page=${page - 1}`}
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
                    href={`/projects?page=${index + 1}`}
                  >
                    {index + 1}
                  </PaginationLink>
                );
              })}
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                disabled={page === totalPages}
                href={`/projects?page=${page + 1}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </ListProjectsMotion>
  );
}
