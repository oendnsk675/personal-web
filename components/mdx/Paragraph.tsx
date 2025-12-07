'use client';
import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Paragraph.module.css';

export interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className={cn(styles.paragraph, 'text-muted-foreground text-pretty')}>
      {children}
    </p>
  );
};

export default Paragraph;
