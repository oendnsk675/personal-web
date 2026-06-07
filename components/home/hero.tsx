import Image from 'next/image';

import bsky from '@/public/icons/bsky.svg';
import dailyDev from '@/public/icons/daily-dev.svg';
import { Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import HeroGridReveal from './hero-grid-reveal';

export default function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-20">
      <div className="col-span-1 flex flex-col justify-center gap-8">
        <div className="w-fit h-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/50 to-transparent">
          <div className="p-1 px-3 rounded-l-[16.42px] bg-linear-to-r from-emerald-700/50 to-transparent text-xs xl:text-sm flex items-center pr-16 ">
            <span className="w-2 h-2 rounded-full bg-emerald-300 mr-2"></span>
            <span>Open to work</span>
          </div>
        </div>

        <div className="max-w-120 grid gap-8">
          <div className="grid gap-7">
            <h1 className="text-5xl 2xl:text-7xl font-bold">{"I\'m"} Cozy</h1>
            <p className="text-pretty text-muted-foreground">
              I build software the way a craftsman shapes stone—
              <br />
              slow, deliberate, and with respect for every cut.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={'/blogs'}>
              <Button variant={'outline'} size={'lg'}>
                Read my blogs
              </Button>
            </Link>
            <Link href={'/about'}>
              <Button size={'lg'}>More about me</Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/oendnsk675"
              target="_blank"
              className="opacity-60 hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Github size={20} strokeWidth={1} />
            </a>
            <a
              href="https://app.daily.dev/sayidinaahmadalqososyi"
              target="_blank"
              className="opacity-60 hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Image src={dailyDev} alt="Logo Daily Dev" />
            </a>
            <a
              href="https://bsky.app/profile/oslab19.bsky.social"
              target="_blank"
              className="opacity-60 hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Image src={bsky} alt="Logo Bsky" />
            </a>
            <a
              href="https://www.instagram.com/oslab19/"
              target="_blank"
              className="opacity-60 hover:opacity-75 transition-all duration-150 cursor-custom"
            >
              <Instagram size={20} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
      <HeroGridReveal />
    </section>
  );
}
