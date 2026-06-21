'use client';

import ArticleContent from '@/components/ArticleContent';
import { motion } from 'motion/react';

export default function NoteDetailContent({
  content,
  slug,
  title,
}: {
  content: string;
  slug: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full md:w-3/4"
    >
      <ArticleContent
        articleContent={content}
        articleTitle={title}
        folder="notes"
        loading={false}
        slug={slug}
      />
    </motion.div>
  );
}
