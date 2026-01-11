import { CircleQuestionMark } from 'lucide-react';
import Link from 'next/link';

export default function CurrentFocus() {
  return (
    <div className="border rounded-2xl p-8 flex flex-col md:flex-row items-center md:justify-between gap-6 mb-44 relative">
      <div className="w-full md:w-2/5 flex justify-center md:justify-start items-center gap-4">
        <div className="w-fit rounded-lg border bg-neutral-900 p-2 relative z-20">
          <CircleQuestionMark className="opacity-75" />
        </div>
        <h3 className="text-xl  font-semibold">What I&apos;m up to now</h3>
      </div>
      <div className="flex-1">
        <ul className="text-muted-foreground list-disc">
          <li>
            I&apos;m a full-stack developer at Kawan Sehat Indonesia, working
            remotely from Lombok, Indonesia.
          </li>
          <li>
            Right now, I&apos;m building an extension called TraceShot—a tool
            that helps turn application flows into clear, readable
            documentation. At the moment, it supports apps built with React,
            Next.js, and React Native.
          </li>
          <li>
            I also share my personal engineering notes on this blog. Feel free
            to explore them{' '}
            <Link href="/blogs" className="underline">
              here.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
