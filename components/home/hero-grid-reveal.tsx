'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import FirstLoad from './grid-hero/first-load';
import FirstResponsiveGrid from './grid-hero/first-responsive-grid';
import SeoGrid from './grid-hero/seo-grid';
import SingleTouchpoint from './grid-hero/single-touchpoint';

export default function HeroGridReveal() {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      window.setTimeout(() => setVisibleStep(1), 500),
      window.setTimeout(() => setVisibleStep(2), 1333),
      window.setTimeout(() => setVisibleStep(3), 2166),
      window.setTimeout(() => setVisibleStep(4), 2500),
    ];

    return () => timeouts.forEach(window.clearTimeout);
  }, []);

  return (
    <motion.div
      aria-hidden={visibleStep === 0}
      initial={{ opacity: 0, y: 16 }}
      animate={
        visibleStep > 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="hidden col-span-1 lg:flex flex-col justify-center"
    >
      {visibleStep > 0 && (
        <div className="grid grid-cols-6 gap-2.5">
          {visibleStep >= 1 && <FirstResponsiveGrid />}
          {visibleStep >= 2 && <SeoGrid />}
          {visibleStep >= 3 && <FirstLoad />}
          {visibleStep >= 4 && <SingleTouchpoint />}
        </div>
      )}
    </motion.div>
  );
}
