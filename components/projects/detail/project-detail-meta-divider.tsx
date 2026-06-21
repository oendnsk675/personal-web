'use client';

import Likes from '@/components/blog/likes';
import ViewCounter from '@/components/blog/view-counter';
import { calcReadingTime, cn } from '@/lib/utils';
import { Clock, Link2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function ProjectDetailMetaDivider({
  content,
  likes,
  slug,
  codeUrl,
  liveUrl,
}: {
  content: string;
  likes?: number;
  slug: string;
  codeUrl?: string;
  liveUrl?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full grid mb-14"
    >
      <hr />
      <div className="flex justify-between flex-wrap gap-4 py-4">
        <div className="flex gap-4">
          <div className="flex gap-1.5 items-center">
            <Clock size={14} className="text-emerald-600" />
            <span className="text-xs text-muted-foreground">
              {calcReadingTime(content)} min read
            </span>
          </div>
          <div className="flex gap-1.5 items-center">
            <Likes value={likes ?? 0} />
          </div>
          <div className="flex gap-1.5 items-center">
            <ViewCounter slug={slug} />
          </div>
        </div>
        <div className="flex item-center gap-4">
          <Link
            href={codeUrl ?? '#'}
            className={cn(
              'flex gap-1.5 items-center text-xs text-muted-foreground hover:text-foreground transition-all duration-150',
              !codeUrl && 'pointer-events-none opacity-50'
            )}
          >
            <SiGithub size={14} />
            <span>Repository</span>
          </Link>
          <Link
            href={liveUrl ?? '#'}
            className={cn(
              'flex gap-1.5 items-center text-xs text-muted-foreground hover:text-foreground transition-all duration-150',
              !liveUrl && 'pointer-events-none opacity-50'
            )}
          >
            <Link2 size={14} />
            <span>Open Live Site</span>
          </Link>
        </div>
      </div>
      <hr />
    </motion.div>
  );
}
