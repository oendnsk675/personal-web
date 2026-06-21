'use client';

import ArticleContent from '@/components/ArticleContent';
import CrouselProject from '@/components/projects/crousel-project';
import { motion } from 'motion/react';

export default function ProjectDetailContent({
  content,
  images,
  slug,
  title,
}: {
  content: string;
  images: string[];
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
      <CrouselProject items={images} />
      <ArticleContent
        articleContent={content}
        articleTitle={title}
        folder="articles"
        loading={false}
        slug={slug}
      />
    </motion.div>
  );
}
