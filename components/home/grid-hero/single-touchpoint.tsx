'use client';

import { ExcoticImageComponent } from '@/components/excotic-image';
import star from '@/public/images/star.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function SingleTouchpoint() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 overflow-hidden"
    >
      <Image
        src={star}
        alt="fast-dev.svg"
        className="absolute top-11 right-12 "
      />
      <Image
        src="/images/moon-1.svg"
        width={22}
        height={22}
        alt="fast-dev.svg"
        className="absolute top-2.5 right-4 "
      />
      <Image
        src="/images/moon-2.svg"
        width={32}
        height={32}
        alt="fast-dev.svg"
        className="absolute top-10 right-1/2 "
      />
      <ExcoticImageComponent
        src="/images/moon-3.svg"
        width={107}
        height={107}
        alt="fast-dev.svg"
        className="absolute bottom-4 left-4"
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -30 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <ExcoticImageComponent
        src="/images/moon-diagonal.svg"
        width={151}
        height={35}
        alt="fast-dev.svg"
        className="absolute bottom-24 right-32 scale-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <ExcoticImageComponent
        src="/images/moon-big.webp"
        width={200}
        height={200}
        alt="fast-dev.svg"
        className="absolute -bottom-12 -right-4 -rotate-12"
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? 5 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          transformOrigin: 'top right',
        }}
      />
      <div className="">
        <p>
          Single touchpoint. <br /> Genuine collaboration.
        </p>
      </div>
    </div>
  );
}
