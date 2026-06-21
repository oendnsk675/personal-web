import CardProjectSekleton from '@/components/card-project-sekleton';
import ProjectsHeader from '@/components/projects/projects-header';
import ListProject from '@/components/projects/list-projects';
import SearchInput from '@/components/search-input';
import SelectSort from '@/components/blog/select-sort';
import { TBlogSortBy } from '@/types/blog';
import { Suspense } from 'react';
import Search from '@/components/projects/search';

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
      <ProjectsHeader />

      {/* content */}
      <main className="w-full xl:max-w-6xl px-4 lg:px-0 relative flex flex-col gap-4 md:gap-0 md:items-start mb-12">
        {/* search */}
        <Search key={'search'} sortBy={sortBy} />

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
