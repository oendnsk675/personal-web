import HeaderLight from '@/components/blog/header-light';
import Fancytext from '@/components/fancy-text';
import ListNote from '@/components/notes/list-notes';
import NotesPattern from '@/components/pattern/notes-pattern';
import SearchInput from '@/components/search-input';
import { Folder } from 'lucide-react';

export default async function Notes(props: {
  searchParams?: Promise<{ title?: string }>;
}) {
  const searchParams = await props.searchParams;
  const title: string | undefined = searchParams?.title;

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* HEADER BLOG */}
      <div className="w-full relative flex flex-col items-center gap-4 px-4 md:px-0 pt-36 pb-6 md:pb-20">
        <HeaderLight />
        <NotesPattern />

        <div className="rounded-lg border bg-neutral-900 p-2 relative z-20">
          <Folder
            width={28}
            className="text-neutral-500 dark:text-neutral-300"
          />
        </div>
        <Fancytext
          className="text-4xl md:text-6xl relative z-20"
          firstWord="Short"
          secondWord="Notes"
        />
        <p className="text-center mb-2 relative z-20 bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 bg-clip-text text-transparent">
          My personal notes {"that\'s"} not long enough to be a blog post
        </p>
        <SearchInput key={'search-input'} />
      </div>

      {/* content */}
      <main className="xl:max-w-6xl px-4 lg:px-0 relative flex flex-col gap-4 md:gap-0 md:items-start mb-12">
        <ListNote filter={title} />
      </main>
    </div>
  );
}
