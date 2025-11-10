import ArcticLightsTopGlow from '@/components/arctic-lights-glow';
import Blogs from '@/components/home/blogs';
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function Home() {
  return (
    <div>
      <ArcticLightsTopGlow />
      {/* <DarkDiagonalFadeGrid /> */}
      <BackgroundBeams />

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
