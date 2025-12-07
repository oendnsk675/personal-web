import HeaderLight from '@/components/blog/header-light';
import CardProject from '@/components/card-projects';
import Fancytext from '@/components/fancy-text';
import ProjectHeaderPattern from '@/components/pattern/project-header-pattern';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { getAllProjects } from '@/lib/content/getAll';
import { Calendar, Eye, Folder } from 'lucide-react';

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

export default function Projects() {
  const { data: projects } = getAllProjects({ limit: 10, order: 'desc' });
  return (
    <div className="w-full relative flex flex-col items-center">
      {/* HEADER BLOG */}
      <div className="w-full relative flex flex-col items-center gap-4 px-4 md:px-0 pt-32 pb-6 md:pb-20 border-b">
        <HeaderLight />
        <ProjectHeaderPattern />

        <div className="rounded-lg border bg-neutral-900 p-2 relative z-20">
          <Folder
            width={28}
            className="text-neutral-500 dark:text-neutral-300"
          />
        </div>
        <Fancytext
          className="text-4xl md:text-6xl relative z-20"
          firstWord="Curated"
          secondWord="Projects"
        />
        <p className="text-center mb-2 relative z-20 bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 bg-clip-text text-transparent">
          Showcase of my projects that I'm proud of.
        </p>
      </div>

      {/* content */}
      <main className="xl:max-w-6xl px-4 lg:px-0 relative flex flex-col gap-4 md:gap-0 md:items-start mb-12">
        {projects.map((project, index) => (
          <CardProject data={project} index={index} key={index} />
        ))}

        {/* paggination */}
        <div className="w-full flex justify-center mt-8">
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
      </main>
    </div>
  );
}
