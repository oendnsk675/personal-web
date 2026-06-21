"use client";

import {motion} from 'motion/react';
import { cn } from '@/lib/utils';

export default function Fancytext({
  firstWord,
  secondWord,
  className,
}: {
  firstWord: string;
  secondWord: string;
  className?: string;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={cn('text-4xl md:text-5xl font-bold', className)}
    >
      <span>{firstWord}</span>
      <span className="transition-colors bg-linear-to-br from-emerald-600/30 via-emerald-600/90 to-emerald-600/30 ml-2 bg-clip-text text-transparent">
        {secondWord}
      </span>
    </motion.h1>
  );
}
