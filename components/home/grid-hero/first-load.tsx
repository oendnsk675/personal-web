'use client';

import { ExcoticImageComponent } from '@/components/excotic-image';
import fastdev from '@/public/images/fast-dev.svg';
import { useState } from 'react';

export default function FirstLoad() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="col-span-2 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <ExcoticImageComponent
          src={fastdev}
          alt="fast-dev.svg"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 2 : 1,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      <div className="flex justify-end">
        <p>
          Fast dev. <br /> Fast loads.
        </p>
      </div>
    </div>
  );
}
