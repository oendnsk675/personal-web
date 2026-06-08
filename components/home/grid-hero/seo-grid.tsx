'use client';

import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function SeoGrid({ revealDelay = 0 }: { revealDelay?: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center items-end overflow-hidden"
    >
      {/* lights */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-radial from-[#298d6a] from-0% to-[rgba(21,89,65,0)] to-95%"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: revealDelay, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <BackgroundRippleEffect cellSize={20} />
      </motion.div>

      <div className="z-10 absolute top-0 left-0 h-full w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: revealDelay + 0.1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-center text-7xl font-bold text-emerald-500/50 [-webkit-text-stroke:0.5px_white]"
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: isHovered ? 0.8 : 0.2,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            SEO
          </motion.h1>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: revealDelay + 0.2, ease: 'easeOut' }}
        className="text-center text-sm text-pretty text-muted-foreground relative z-20"
      >
        No more hiding. Specialist SEO.
      </motion.p>
    </div>
  );
}
