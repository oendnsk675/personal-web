import HeaderLight from '@/components/blog/header-light';
import SelectSort from '@/components/blog/select-sort';
import CardProjectSekleton from '@/components/card-project-sekleton';
import Fancytext from '@/components/fancy-text';
import ProjectHeaderPattern from '@/components/pattern/project-header-pattern';
import ListProject from '@/components/projects/list-projects';
import SearchInput from '@/components/search-input';
import { TBlogSortBy } from '@/types/blog';
import { Folder } from 'lucide-react';
import { Suspense } from 'react';

export default async function Projects(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    sortBy?: string;
    topic?: string;
    title?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const sortBy: TBlogSortBy = (searchParams?.sortBy as TBlogSortBy) || 'dates';
  const title: string | undefined = searchParams?.title;
  const listKey = `${page}-${sortBy}-${title ?? ''}`;

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
          Showcase of my projects that {"I'm"} proud of.
        </p>
      </div>

      {/* content */}
      <main className="w-full xl:max-w-6xl px-4 lg:px-0 relative flex flex-col gap-4 md:gap-0 md:items-start mb-12">
        <div className="flex gap-4 justify-center w-full">
          <div className="w-fit">
            <SearchInput key={'search-input'} />
          </div>
          <div className="w-fit">
            <SelectSort key={'select-sort'} defaultValue={sortBy} />
          </div>
        </div>

        {/* cards */}
        <section className="w-full">
          <Suspense key={listKey} fallback={<CardProjectSekleton />}>
            <ListProject page={page} sortBy={sortBy} filter={{ title }} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
