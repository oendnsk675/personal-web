import ArcticLightsTopGlow from '@/components/arctic-lights-glow';
import Blogs from '@/components/home/blogs';
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';

export default function Home() {
  return (
    <div className="w-full xl:max-w-6xl px-4 xl:px-0 overflow-hidden">
      <ArcticLightsTopGlow />

      <main className="pb-10">
        {/* hero */}
        <Hero />

        {/* blogs */}
        <Blogs />

        {/* projects */}
        <Projects />
      </main>
    </div>
  );
}
