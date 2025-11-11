import Image from 'next/image';

import bsky from '@/public/icons/bsky.svg';
import dailyDev from '@/public/icons/daily-dev.svg';
import { Github, Instagram } from 'lucide-react';
import { Button } from '../ui/button';
import FirstLoad from './grid-hero/first-load';
import FirstResponsiveGrid from './grid-hero/first-responsive-grid';
import SeoGrid from './grid-hero/seo-grid';
import SingleTouchpoint from './grid-hero/single-touchpoint';

export default function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-20">
      <div className="col-span-1 flex flex-col justify-center gap-8">
        <div className="w-fit h-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/70 to-transparent">
          <div className="p-1 px-3 rounded-l-[16.42px] bg-linear-to-r from-emerald-700/70 to-transparent text-xs xl:text-sm flex items-center pr-16 ">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] mr-2"></span>
            <span>Open to work</span>
          </div>
        </div>

        <div className="max-w-120 grid gap-8">
          <div className="grid gap-7">
            <h1 className="text-5xl 2xl:text-7xl font-bold">I'm Cozy</h1>
            <p className="">
              I craft premium websites for creators, entrepreneurs and startups
              who want to convert clients, drive serious revenue and stand out
              in an ever-crowding market.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant={'outline'} size={'lg'}>
              Learn How
            </Button>
            <Button size={'lg'}>More about me</Button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/oendnsk675"
              target="_blank"
              className="hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Github size={20} strokeWidth={0.8} />
            </a>
            <a
              href="https://app.daily.dev/sayidinaahmadalqososyi"
              target="_blank"
              className="hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Image src={dailyDev} alt="Logo Daily Dev" />
            </a>
            <a
              href="https://bsky.app/profile/oslab19.bsky.social"
              target="_blank"
              className="hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Image src={bsky} alt="Logo Bsky" />
            </a>
            <a
              href="https://www.instagram.com/oslab19/"
              target="_blank"
              className="hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Instagram size={20} strokeWidth={0.8} />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden col-span-1 lg:flex flex-col justify-center">
        <div className="grid grid-cols-6 gap-2.5">
          <FirstResponsiveGrid />
          <SeoGrid />
          <FirstLoad />
          <SingleTouchpoint />
        </div>
      </div>
    </section>
  );
}
