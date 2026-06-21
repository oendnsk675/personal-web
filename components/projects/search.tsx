'use client';

import React from 'react';
import { motion } from 'motion/react';
import SearchInput from '../search-input';
import SelectSort from '../blog/select-sort';

export default function Search({ sortBy }: { sortBy?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex gap-4 justify-center w-full"
    >
      <div className="w-fit">
        <SearchInput key={'search-input'} />
      </div>
      <div className="w-fit">
        <SelectSort key={'select-sort'} defaultValue={sortBy} />
      </div>
    </motion.div>
  );
}
