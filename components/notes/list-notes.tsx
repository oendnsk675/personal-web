import { getAllNotes } from '@/lib/content/getAll';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { CardNote } from './card-note';

export default function ListNote({ filter }: { filter?: string }) {
  const { data: notes } = getAllNotes({ limit: 10, filter: { title: filter } });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notes.map((note, index) => (
          <CardNote note={note} key={index} />
        ))}
      </div>
    </>
  );
}
