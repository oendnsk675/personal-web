'use client';

import Fancytext from '@/components/fancy-text';
import { motion } from 'motion/react';
import { TerminalIcon } from 'lucide-react';
import SearchInput from '@/components/search-input';
import HeaderLight from './header-light';

export default function BlogsHeader() {
  return (
    <div className="w-full relative flex flex-col items-center gap-4 px-4 md:px-0 pt-32 pb-6 md:pb-20 border-b">
      <HeaderLight />
      
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="rounded-lg border bg-neutral-900 p-2 relative z-20"
      >
        <TerminalIcon
          width={28}
          className="text-neutral-500 dark:text-neutral-300"
        />
      </motion.div>
      <Fancytext
        className="text-4xl md:text-6xl relative z-20"
        firstWord="The"
        secondWord="Blog"
      />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-center mb-2 relative z-20 bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 bg-clip-text text-transparent"
      >
        Thoughts, mental models, and tutorials about front-end development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <SearchInput key={'search-input'} />
      </motion.div>
    </div>
  );
}
