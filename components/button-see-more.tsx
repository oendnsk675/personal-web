'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ButtonSeeMore({
  href,
  label = 'See more',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex justify-center mt-8"
    >
      <Link href={href || '/'} className="flex gap-1.5 items-center cursor-custom">
        <span className='text-muted-foreground'>{label}</span>
        <p className="w-7 h-7 rounded-lg border flex items-center justify-center">
          <ArrowRight size={16} />
        </p>
      </Link>
    </motion.div>
  );
}
