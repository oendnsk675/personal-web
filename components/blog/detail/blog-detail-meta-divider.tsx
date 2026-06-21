'use client';

import Likes from '@/components/blog/likes';
import ViewCounter from '@/components/blog/view-counter';
import { calcReadingTime } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogDetailMetaDivider({
  content,
  likes,
  slug,
  views,
}: {
  content: string;
  likes?: number;
  slug: string;
  views?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full grid mb-14"
    >
      <hr />
      <div className="flex justify-between py-4">
        <div className="flex gap-4">
          <div className="flex gap-1.5 items-center">
            <ViewCounter slug={slug} defaultViews={views} />
          </div>
        </div>
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
        </div>
      </div>
      <hr />
    </motion.div>
  );
}
