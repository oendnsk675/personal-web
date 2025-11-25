'use client'; // Mark this component as client-side

import Markdown from '@/components/Markdown';
import React from 'react';
import styles from './ArticleContent.module.css';

interface ArticleContentProps {
  articleContent: string | null;
  articleTitle: string;
  folder: string;
  loading: boolean;
  slug: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  articleContent,
  articleTitle,
  folder,
  loading,
  slug,
}) => {
  return (
    <>
      {loading ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.spinner} data-testid="spinner"></div>
        </div>
      ) : (
        <article>
          {articleContent ? (
            <Markdown>{articleContent}</Markdown>
          ) : (
            <p>Article not found.</p>
          )}
        </article>
      )}
    </>
  );
};

export default ArticleContent;
