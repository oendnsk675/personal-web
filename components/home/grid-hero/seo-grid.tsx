'use client';

import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function SeoGrid() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center items-end overflow-hidden"
    >
      <BackgroundRippleEffect cellSize={20} />

      <div className="z-10 absolute top-0 left-0 h-full w-full flex justify-center items-center">
        <motion.h1
          className="text-center text-7xl font-bold text-emerald-500/50 [-webkit-text-stroke:0.5px_white]"
          initial={{ opacity: 0.2, y: 0 }}
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          SEO
        </motion.h1>
      </div>
      <p className="text-center text-pretty">No more hiding. Specialist SEO.</p>
    </div>
  );
}
