'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import styles from './ListNode.module.css';

export interface ListNodeProps {
  ordered: boolean;
  children: React.ReactNode;
}

const ListNode: React.FC<ListNodeProps> = ({ ordered, children }) => {
  if (ordered) {
    return (
      <ol
        className={cn(
          styles.orderedList,
          'list-decimal text-muted-foreground text-pretty'
        )}
      >
        {children}
      </ol>
    );
  } else {
    return (
      <ul
        className={cn(
          styles.unorderedList,
          'list-disc text-muted-foreground text-pretty'
        )}
      >
        {children}
      </ul>
    );
  }
};

export default ListNode;
