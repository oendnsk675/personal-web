'use client';

import ResponsiveFirstDesignSVG from '@/components/pattern/responsive-first-design-svg';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function FirstResponsiveGrid({
  revealDelay = 0,
}: {
  revealDelay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center overflow-hidden"
    >
      {/* lights */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-linear-to-t from-[#298d6a] from-0% to-[rgba(21,89,65,0)] to-95%"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: revealDelay, ease: 'easeOut' }}
        className="text-center text-sm text-pretty text-muted-foreground mt-2"
      >
        Built responsively, <br /> shaped deliberately
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: revealDelay + 0.15, ease: 'easeOut' }}
        className="absolute bottom-0 right-0 w-full flex justify-center"
      >
        <ResponsiveFirstDesignSVG isHovered={isHovered} />
      </motion.div>
    </div>
  );
}
