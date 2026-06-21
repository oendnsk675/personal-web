'use client';

import Comments from '@/components/comments';
import { motion } from 'motion/react';

export default function BlogDetailComments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Comments />
    </motion.div>
  );
}
