'use client';

import LikeButton from '@/components/blog/like-button';
import { motion } from 'motion/react';

export default function ProjectDetailLike({
  defaultValue,
  slug,
}: {
  defaultValue?: number;
  slug: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      id="like-button"
      className="w-full flex justify-center items-center mb-8 relative"
    >
      <LikeButton defaultValue={defaultValue ?? 0} slug={slug} />
    </motion.div>
  );
}
