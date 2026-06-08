import { motion } from 'motion/react';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    const { alt, ...rest } = props;

    return <Image alt={alt} {...rest} ref={ref} />;
  }
);

export const ExcoticImageComponent = motion(ExoticImage);
