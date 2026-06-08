'use client';

import { ExcoticImageComponent } from '@/components/excotic-image';
import star from '@/public/images/star.svg';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SingleTouchpoint({
  revealDelay = 0,
}: {
  revealDelay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showBigMoon, setShowBigMoon] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowBigMoon(true), 3000);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 overflow-hidden"
    >
      {/* lights */}
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-linear-to-bl from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-40% to-[rgba(21,89,65,0.30)] to-95% z-10"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: revealDelay, ease: 'easeOut' }}
      >
        <Image
          src={star}
          alt=""
          aria-hidden="true"
          className="absolute top-11 right-12 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: revealDelay + 0.1, ease: 'easeOut' }}
      >
        <Image
          src="/images/moon-1.svg"
          width={22}
          height={22}
          alt=""
          aria-hidden="true"
          className="absolute top-2.5 right-4 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: revealDelay + 0.2, ease: 'easeOut' }}
      >
        <Image
          src="/images/moon-2.svg"
          width={32}
          height={32}
          alt=""
          aria-hidden="true"
          className="absolute top-10 right-1/2 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: revealDelay + 0.3, ease: 'easeOut' }}
      >
        <ExcoticImageComponent
          src="/images/moon-3.svg"
          width={107}
          height={107}
          alt=""
          aria-hidden="true"
          className="absolute z-30 bottom-4 left-4"
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{
            rotate: isHovered ? -30 : 0,
            opacity: isHovered ? 100 : 0.4,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <ExcoticImageComponent
        src="/images/moon-diagonal.svg"
        width={151}
        height={35}
        alt=""
        aria-hidden="true"
        className="absolute bottom-24 right-32 scale-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-12 -right-4 h-[200px] w-[200px] -rotate-12 bg-[url('/images/moon-big.webp')] bg-contain bg-no-repeat"
        initial={{ rotate: 0, opacity: 0, scale: 0.92 }}
        animate={{
          rotate: isHovered ? 5 : 0,
          opacity: showBigMoon ? (isHovered ? 1 : 0.4) : 0,
          scale: showBigMoon ? 1 : 0.92,
        }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        style={{
          transformOrigin: 'top right',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: revealDelay + 0.45, ease: 'easeOut' }}
        className="relative z-30"
      >
        <p className="text-muted-foreground text-sm">
          Single touchpoint. <br /> Genuine collaboration.
        </p>
      </motion.div>
    </div>
  );
}
