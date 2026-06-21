import AboutHeader from '@/components/about/about-header';
import CurrentFocus from '@/components/about/current-focus';
import Experiences from '@/components/about/experiences';
import SelfIntro from '@/components/about/self-intro';
import { getAllNotes } from '@/lib/content/getAll';

export default function Notes() {
  const { data: notes } = getAllNotes({ limit: 10 });
  return (
    <div className="w-full relative flex flex-col items-center">
      <AboutHeader />

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
