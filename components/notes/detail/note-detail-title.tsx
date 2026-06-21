'use client';

import { motion } from 'motion/react';

export default function NoteDetailTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="grid gap-4 mb-12"
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </motion.div>
  );
}
