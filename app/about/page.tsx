import CurrentFocus from '@/components/about/current-focus';
import Experiences from '@/components/about/experiences';
import SelfIntro from '@/components/about/self-intro';
import HeaderLight from '@/components/blog/header-light';
import Fancytext from '@/components/fancy-text';
import { getAllNotes } from '@/lib/content/getAll';
import { User } from 'lucide-react';

export default function Notes() {
  const { data: notes } = getAllNotes({ limit: 10 });
  return (
    <div className="w-full relative flex flex-col items-center">
      {/* HEADER BLOG */}
      <div className="w-full relative flex flex-col items-center gap-4 px-4 md:px-0 pt-36 pb-6 md:pb-20">
        <HeaderLight />

        <div className="rounded-lg border bg-neutral-900 p-2 relative z-20">
          <User width={28} className="text-neutral-500 dark:text-neutral-300" />
        </div>

        <Fancytext
          className="text-4xl md:text-6xl relative z-20"
          firstWord="About"
          secondWord="Me"
        />
        <p className="text-center mb-2 relative z-20 bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 bg-clip-text text-transparent">
          A story of growth and discovery
        </p>
      </div>

      {/* content */}
      <main className="xl:w-6xl px-4 lg:px-0 mb-12 relative z-20">
        {/* self introduce */}
        <SelfIntro />
        <CurrentFocus />
        <Experiences />
      </main>
    </div>
  );
}
