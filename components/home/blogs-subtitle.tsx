'use client';

import { motion } from 'motion/react';

export default function BlogsSubtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="text-pretty text-muted-foreground"
    >
      Some of my favorite writing.
    </motion.p>
  );
}
