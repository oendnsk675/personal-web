import Image from 'next/image';

import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import bsky from '@/public/icons/bsky.svg';
import dailyDev from '@/public/icons/daily-dev.svg';
import fastdev from '@/public/images/fast-dev.svg';
import responsive_first from '@/public/images/responsive-first-design.svg';
import star from '@/public/images/star.svg';
import { Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="col-span-1 flex flex-col justify-center gap-8">
        <div className="w-fit h-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/70 to-transparent">
          <div className="p-1 px-3 rounded-l-[16.42px] bg-linear-to-r from-emerald-700/70 to-transparent text-xs xl:text-sm flex items-center pr-16 ">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] mr-2"></span>
            <span>Open to work</span>
          </div>
        </div>

        <div className="max-w-120 grid gap-8">
          <div className="grid gap-7">
            <h1 className="text-5xl font-bold">I'm Cozy</h1>
            <p className="">
              I craft premium websites for creators, entrepreneurs and startups
              who want to convert clients, drive serious revenue and stand out
              in an ever-crowding market.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant={'outline'}>Learn How</Button>
            <Button>More about me</Button>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/oendnsk675" target="_blank">
              <Github size={20} strokeWidth={0.8} />
            </Link>
            <Link href="https://github.com/oendnsk675" target="_blank">
              <Image src={dailyDev} alt="Logo Daily Dev" />
            </Link>
            <Link
              href="https://bsky.app/profile/oslab19.bsky.social"
              target="_blank"
            >
              <Image src={bsky} alt="Logo Bsky" />
            </Link>
            <Link href="https://github.com/oendnsk675" target="_blank">
              <Instagram size={20} strokeWidth={0.8} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden col-span-1 lg:flex flex-col justify-center">
        <div className="grid grid-cols-6 gap-2.5">
          <div className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center">
            <p className="text-center text-pretty">
              Bespoke, <br /> responsive-first design
            </p>
            <div className="absolute bottom-0 right-0 w-full flex justify-center">
              <Image src={responsive_first} alt="Logo" />
            </div>
          </div>
          <div className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center items-end overflow-hidden">
            <BackgroundRippleEffect cellSize={20} />

            <div className="z-10 absolute top-0 left-0 h-full w-full flex justify-center items-center">
              <h1 className="text-center text-5xl font-bold text-emerald-500/5 [-webkit-text-stroke:0.5px_white]">
                SEO
              </h1>
            </div>
            <p className="text-center text-pretty">
              No more hiding. Specialist SEO.
            </p>
          </div>
          <div className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% p-4 relative">
            <div className="absolute inset-0 w-full h-full flex justify-center items-center">
              <Image src={fastdev} alt="fast-dev.svg" />
            </div>
            <div className="flex justify-end">
              <p>
                Fast dev. <br /> Fast loads.
              </p>
            </div>
          </div>
          <div className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 overflow-hidden">
            <Image
              src={star}
              alt="fast-dev.svg"
              className="absolute top-11 right-12 "
            />
            <Image
              src="/images/moon-1.svg"
              width={22}
              height={22}
              alt="fast-dev.svg"
              className="absolute top-2.5 right-4 "
            />
            <Image
              src="/images/moon-2.svg"
              width={32}
              height={32}
              alt="fast-dev.svg"
              className="absolute top-10 right-1/2 "
            />
            <Image
              src="/images/moon-3.svg"
              width={107}
              height={107}
              alt="fast-dev.svg"
              className="absolute bottom-4 left-4"
            />
            <Image
              src="/images/moon-3.svg"
              width={188}
              height={188}
              alt="fast-dev.svg"
              className="absolute -bottom-16 -right-12"
            />
            <div className="">
              <p>
                Single touchpoint. <br /> Genuine collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
