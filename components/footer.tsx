import bsky from '@/public/icons/bsky.svg';
import dailyDev from '@/public/icons/daily-dev.svg';
import { ArrowRight, Github, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="w-full xl:flex xl:flex-col items-center">
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="w-full xl:max-w-6xl py-20 md:py-20 flex flex-col md:flex-row md:justify-between gap-11 md:gap-11 px-4 md:px-0">
        {/* footer basic information */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/vercel.svg"
              alt="Logo"
              className="rotate-90"
              width={20}
              height={20}
            />
            <h4 className="text-xl font-semibold md:font-bold">
              Sayidina Ahmadal Qososyi
            </h4>
          </div>
          <p className="text-pretty text-muted-foreground mb-6">
            Help you rebuild and redefine fundamental concepts through mental
            models.
          </p>
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

        <div className="w-full xl:w-2/5 grid grid-cols-2 md:grid-cols-3 md:flex-col xl:flex-row gap-11 md:gap-8">
          <div className="col-span-1">
            <span className="block mb-3 text-muted-foreground">General</span>
            <ul className="grid gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Notes</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="block mb-3 text-muted-foreground">
              The Website
            </span>
            <ul className="grid gap-2">
              <li>
                <Link href="/">Bucket List</Link>
              </li>
              <li>
                <Link href="/">Users</Link>
              </li>
              <li>
                <Link href="/">Guest Book</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="block mb-3 text-muted-foreground">Resources</span>
            <ul className="grid gap-2">
              <li>
                <Link href="/">Book Notes</Link>
              </li>
              <li>
                <Link href="/">Starter Templates</Link>
              </li>
              <li>
                <Link href="/">RSS</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-semibold md:font-bold mb-3">
            Subscribe to Cozy blog newsletter
          </h4>
          <p className="text-pretty text-muted-foreground mb-6">
            Don't miss out 😉. Get an email whenever I post, no spam.
          </p>

          <Button variant={'outline'}>
            <span>View Project</span>
            <p className="w-7 h-7 rounded-lg border flex items-center justify-center">
              <ArrowRight size={16} />
            </p>
          </Button>
        </div>
      </div>
      <div className="w-full xl:max-w-6xl">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="py-14 pb-28 flex justify-center">
          <span className="text-center">
            Copyright © {new Date().getFullYear()} Sayidina Ahmadal Qososyi. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
