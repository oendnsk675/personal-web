'use client';
import React from 'react';

export interface PreformattedProps {
  children: React.ReactNode;
  className?: string;
}

const Preformatted: React.FC<PreformattedProps> = ({ children, className }) => (
  <pre className={className}>{children}</pre>
);

export default Preformatted;
