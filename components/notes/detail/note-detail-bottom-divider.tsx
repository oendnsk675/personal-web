'use client';

import LineLights from '@/components/pattern/line-lights';
import { motion } from 'motion/react';

export default function NoteDetailBottomDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-10 relative overflow-hidden mb-16"
    >
      <div className="absolute left-0 bottom-0 z-20 h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      <LineLights position="bottom" className="opacity-60" />
    </motion.div>
  );
}
