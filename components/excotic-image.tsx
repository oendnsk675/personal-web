import { motion } from 'motion/react';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />;
  }
);

export const ExcoticImageComponent = motion(ExoticImage);
