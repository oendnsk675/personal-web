'use client';

import HeaderLight from '@/components/blog/header-light';
import NotesPattern from '@/components/pattern/notes-pattern';
import { motion } from 'motion/react';

export default function NoteDetailHero({ date }: { date: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-80 relative overflow-hidden"
    >
      <div className="w-full h-80 bg-linear-to-t from-background absolute top-0 z-20"></div>
      <HeaderLight />
      <NotesPattern date={date} />
    </motion.div>
  );
}
