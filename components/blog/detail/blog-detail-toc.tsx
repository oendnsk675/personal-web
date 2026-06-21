'use client';

import { motion } from 'motion/react';

type TocItem = {
  id: string;
  level: number;
  text: string;
};

export default function BlogDetailToc({ toc }: { toc: TocItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="hidden md:block md:sticky left-0 top-24 flex-1 h-96 overflow-hidden rounded-xl border"
    >
      <div className="h-full relative">
        <h4 className="sticky inset-0 p-5 bg-background font-semibold border-b">
          Table of Contents
        </h4>

        <div className="h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-4 p-5 pb-24">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ paddingLeft: `${(item.level - 1) * 8}px` }}
              className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer block"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
