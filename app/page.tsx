import ArcticLightsTopGlow from '@/components/arctic-lights-glow';
import DarkDiagonalFadeGrid from '@/components/dark-diagonal-fade-grid';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import responsive_first from '@/public/images/responsive-first-design.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <ArcticLightsTopGlow />
      <DarkDiagonalFadeGrid />
      <Header />

      <main className="">
        <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-center gap-8">
            <div className="w-fit h-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/70 to-transparent">
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
          <div className="col-span-1 flex flex-col justify-center">
            <div className="grid grid-cols-6 gap-2.5">
              <div className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center">
                <p className="text-center">
                  Bespoke, <br /> responsive-first design
                </p>
                <div className="absolute bottom-0 right-0 w-full flex justify-center">
                  <Image src={responsive_first} alt="Logo" />
                </div>
              </div>
              <div className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center items-end">
                <p className="text-center">No more hiding. Specialist SEO.</p>
              </div>
              <div className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95%"></div>
              <div className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95%"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
