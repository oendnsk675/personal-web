import HeaderLight from '@/components/blog/header-light';
import Fancytext from '@/components/fancy-text';
import ListNote from '@/components/notes/list-notes';
import NotesHeader from '@/components/notes/notes-header';
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
      <NotesHeader />

      {/* content */}
      <main className="xl:max-w-6xl px-4 lg:px-0 relative flex flex-col gap-4 md:gap-0 md:items-start mb-12">
        <ListNote filter={title} />
      </main>
    </div>
  );
}
