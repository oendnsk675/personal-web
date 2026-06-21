'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function NoteDetailProfile({ date }: { date: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex gap-4"
    >
      <div className="size-10 bg-neutral-500 overflow-hidden rounded-full flex items-center justify-center relative">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid">
        <h4 className="font-semibold">Sayidina Ahmadal Qososyi</h4>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </motion.div>
  );
}
