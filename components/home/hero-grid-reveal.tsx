'use client';

import { motion } from 'motion/react';
import FirstLoad from './grid-hero/first-load';
import FirstResponsiveGrid from './grid-hero/first-responsive-grid';
import SeoGrid from './grid-hero/seo-grid';
import SingleTouchpoint from './grid-hero/single-touchpoint';

export default function HeroGridReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="hidden col-span-1 lg:flex flex-col justify-center"
    >
      <div className="grid grid-cols-6 gap-2.5">
        <div className="col-span-4 h-56">
          <FirstResponsiveGrid revealDelay={0.35} />
        </div>
        <div className="col-span-2 h-56">
          <SeoGrid revealDelay={0.7} />
        </div>
        <div className="col-span-2 h-56">
          <FirstLoad revealDelay={1.05} />
        </div>
        <div className="col-span-4 h-56">
          <SingleTouchpoint revealDelay={1.4} />
        </div>
      </div>
    </motion.div>
  );
}
