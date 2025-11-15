import HeaderLight from '@/components/blog/header-light';
import CardBlog from '@/components/card-blog';
import Fancytext from '@/components/fancy-text';
import RichSelect from '@/components/rich-select';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Calendar, Eye, Search, TerminalIcon } from 'lucide-react';
import Link from 'next/link';

const sortOptions = [
  {
    value: 'views',
    label: 'Sort by views',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    value: 'dates',
    label: 'Sort by date',
    icon: <Calendar className="h-4 w-4" />,
  },
];

export default function Blog() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HEADER BLOG */}
      <div className="w-full relative flex flex-col items-center gap-4 pt-32 pb-20 border-b">
        <HeaderLight />

        <div className="rounded-2xl border p-2 relative z-20">
          <TerminalIcon
            width={28}
            className="text-neutral-500 dark:text-neutral-300"
          />
        </div>
        <Fancytext
          className="text-4xl md:text-6xl relative z-20"
          firstWord="The"
          secondWord="Blog"
        />
        <p className="text-center mb-2 relative z-20">
          Thoughts, mental models, and tutorials about front-end development.
        </p>
        <InputGroup className="w-full md:w-xl relative z-20">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
      </div>
      <main className="xl:max-w-6xl px-4 lg:px-0 relative min-h-[150vh] flex">
        {/* left */}
        <section className="w-3/4 h-[150vh] pb-6 pr-6">
          {[1, 2, 3].map((item) => (
            <CardBlog key={item} />
          ))}
          <div className="flex justify-center mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        {/* right */}
        <section className="sticky left-0 top-8 flex-1 py-6 pl-6">
          <RichSelect
            options={sortOptions}
            placeholder="Sort by"
            className="mb-8"
          />

          <div className="">
            <h4 className="font-semibold mb-4">Choose topics</h4>
            <div className="flex items-center flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="p-1 px-2 bg-white/5 rounded-xl text-sm cursor-custom"
                >
                  Topic {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
