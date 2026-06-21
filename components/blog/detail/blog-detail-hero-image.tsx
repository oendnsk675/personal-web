'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function BlogDetailHeroImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute w-full h-80"
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="w-full h-80 bg-linear-to-t from-background absolute top-0"></div>
    </motion.div>
  );
}
