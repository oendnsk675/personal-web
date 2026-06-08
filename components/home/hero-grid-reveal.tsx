'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import FirstLoad from './grid-hero/first-load';
import FirstResponsiveGrid from './grid-hero/first-responsive-grid';
import SeoGrid from './grid-hero/seo-grid';
import SingleTouchpoint from './grid-hero/single-touchpoint';

function RevealItem({
  children,
  className,
  show,
}: {
  children: ReactNode;
  className: string;
  show: boolean;
}) {
  return (
    <div className={className}>
      {show && (
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 18, scale: 0.96, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export default function HeroGridReveal() {
  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      window.setTimeout(() => setVisibleStep(1), 500),
      window.setTimeout(() => setVisibleStep(2), 1333),
      window.setTimeout(() => setVisibleStep(3), 2266),
      window.setTimeout(() => setVisibleStep(4), 3000),
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
          <RevealItem show={visibleStep >= 1} className="col-span-4 h-56">
            <FirstResponsiveGrid />
          </RevealItem>
          <RevealItem show={visibleStep >= 2} className="col-span-2 h-56">
            <SeoGrid />
          </RevealItem>
          <RevealItem show={visibleStep >= 3} className="col-span-2 h-56">
            <FirstLoad />
          </RevealItem>
          <RevealItem show={visibleStep >= 4} className="col-span-4 h-56">
            <SingleTouchpoint />
          </RevealItem>
        </div>
      )}
    </motion.div>
  );
}
