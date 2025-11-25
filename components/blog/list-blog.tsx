import { getPaginatedBlogs } from '@/lib/getPaginatedBlogs';
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

export default function ListBlog({ page }: { page: number }) {
  const { data, totalPages } = getPaginatedBlogs(page, 10);

  return (
    <>
      {data.map((item, index) => (
        <CardBlog content={item} key={index} />
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
