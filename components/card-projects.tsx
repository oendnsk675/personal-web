"use client"

import { PATTERNS } from '@/components/pattern/project-pattern';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TProjectMarkdown } from '@/types/project';
import { ArrowRight, Link2 } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { stackIcons } from './stack-icons';

export default function CardProject({
  data,
  index = 0,
}: {
  data: TProjectMarkdown;
  index: number;
}) {
  const Pattern = PATTERNS[index % PATTERNS.length];
  const liveUrl = data?.links?.live;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col-reverse md:flex-row justify-between gap-6 py-4 md:py-8"
    >
      {/* Left */}
      <div className="flex-1 border rounded-2xl p-7 relative">
        {/* backdrop when mobile version */}
        <div className="absolute top-0 right-0 md:hidden">
          <Pattern />
        </div>

        {/* title & description */}
        <div className="flex flex-col gap-4 mb-4">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <p className="text-pretty">{data?.description}</p>
        </div>
        {/* tools */}
        <div className="flex items-center gap-2 mb-8">
          <span>Tools: </span>
          <div className="flex items-center gap-2">
            {data?.stack.map((tech) => {
              return stackIcons[tech] ? (
                <span
                  key={tech}
                  className="flex items-center justify-center p-1 rounded bg-white/20 text-sm"
                >
                  {stackIcons[tech] ?? tech}
                </span>
              ) : (
                <span className='p-1 rounded bg-white/20 text-xs' key={tech}>{tech}</span>
              );
            })}
          </div>
        </div>
        {/* CTA */}
        <div className="flex items-center justify-between flex-wrap gap-2 gap-y-6">
          <div className="flex items-center gap-4">
            <Link href={`/projects/${data?.slug}`}>
              <Button variant={'outline'}>
                <span>View Project</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            {data?.links?.code && (
              <Link href={data?.links?.code || '#'}>
                <Button variant={'outline'}>
                  <span>View Code</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            )}
          </div>
          <Link
            href={liveUrl || '#'}
            aria-disabled={!liveUrl}
            tabIndex={liveUrl ? undefined : -1}
            className={cn(
              'flex gap-1 text-muted-foreground hover:text-foreground items-center',
              !liveUrl &&
                'pointer-events-none opacity-60 hover:text-muted-foreground cursor-default'
            )}
          >
            <Link2 size={16} />
            <span className="text-xs">Open Live Site</span>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="hidden md:block md:w-72 aspect-square border overflow-hidden rounded-lg relative p-6">
        {data.thumbnail ? (
          <Image
            src={data.thumbnail}
            fill
            alt={data.thumbnail}
            sizes="288px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-150 from-[#2E996C]/30 to-[#0F3324]/30 flex items-center justify-center">
            <h1 className="font-caveat text-3xl">Thumbnail</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}
