'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import styles from './LinkNode.module.css';

export interface LinkNodeProps {
  href?: string | undefined;
  children: React.ReactNode;
}

const LinkNode: React.FC<LinkNodeProps> = ({ href, children }) => {
  return (
    <a
      className={cn(
        styles.link,
        'text-pretty text-emerald-400! underline hover:opacity-75 transition-all duration-150'
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default LinkNode;
