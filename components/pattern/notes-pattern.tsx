'use client';

import { formatDate } from '@/lib/utils';
import { motion } from 'motion/react';

export default function NotesPattern({
  notes,
  date = new Date().toISOString(),
}: {
  notes?: string;
  date?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
       className="absolute inset-0 h-[450px] w-full p-4 md:p-8 top-[-1rem] md:top-0 opacity-60">
      <div className="flex flex-col invisible md:visible">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="size-4 bg-neutral-500" />
              <div className="size-4 bg-neutral-500" />
              <div className="size-4 bg-neutral-500" />
            </div>
            <div className="flex items-center space-x-[-1px]">
              <div className="size-4 border border-neutral-500" />
              <div className="size-4 border border-neutral-500" />
              <div className="size-4 border border-neutral-500" />
              <div className="size-4 border border-neutral-500" />
              <div className="size-4 border border-neutral-500" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="c1 txt-tertiary flex items-baseline">
              <span className="inline-block min-w-[10ch] text-sm">Notes</span>
              <span className="flex flex-col">
                <span className="inline-block w-32 line-clamp-1 truncate font-caveat text-xl tracking-wider">
                  {notes ? notes : "Cozy's shorts"}
                </span>
                <span
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-neutral-800 h-[1px] w-32"
                />
              </span>
            </p>
            <p className="c1 txt-tertiary">
              <span className="inline-block text-sm min-w-[10ch]">Date</span>
              <span className="font-caveat text-xl leading-tight">
                {date ? formatDate(date) : formatDate()}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <hr className="border-neutral-500 border-[1.5px]" />
          <hr className="border-neutral-500 border-[0.5px] mt-1" />
          <div
            className="mt-1"
            style={{
              height: '2px',
              backgroundImage:
                'radial-gradient(circle, rgb(115, 115, 115) 1px, transparent 1px)',
              backgroundSize: '50px 2px',
              backgroundPosition: '-24px 0px',
            }}
          />
        </div>
        <div className="flex flex-col gap-8 opacity-10 mt-8">
          <hr className="border-neutral-500 border-dashed" />
          <hr className="border-neutral-500" />
          <hr className="border-neutral-500 border-dashed" />
          <hr className="border-neutral-500" />
          <hr className="border-neutral-500 border-dashed" />
          <hr className="border-neutral-500" />
          <hr className="border-neutral-500 border-dashed" />
          <hr className="border-neutral-500" />
        </div>
      </div>
    </motion.div>
  );
}
