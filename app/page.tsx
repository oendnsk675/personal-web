import ArcticLightsTopGlow from '@/components/arctic-lights-glow';
import DarkDiagonalFadeGrid from '@/components/dark-diagonal-fade-grid';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="">
      <ArcticLightsTopGlow />
      <DarkDiagonalFadeGrid />
      <Header />

      <main className="">
        <section className="w-full h-screen flex justify-between items-center">
          <div className="w-full lg:w-1/2 grid gap-8">
            <div className="w-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/70 to-transparent">
              <div className="p-1 px-3 rounded-l-[16.42px] bg-linear-to-r from-emerald-700/70 to-transparent text-xs xl:text-sm flex items-center pr-16 ">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] mr-2"></span>
                <span>Open to work</span>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="grid gap-7">
                <h1 className="text-5xl font-bold">I'm Cozy</h1>
                <p className="">
                  I craft premium websites for creators, entrepreneurs and
                  startups who want to convert clients, drive serious revenue
                  and stand out in an ever-crowding market.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant={'outline'}>Learn How</Button>
                <Button>More about me</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
