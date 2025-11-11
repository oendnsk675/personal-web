'use client';

import ResponsiveFirstDesignSVG from '@/components/pattern/responsive-first-design-svg';
import { useState } from 'react';

export default function FirstResponsiveGrid() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="col-span-4 h-56 rounded-xl bg-linear-to-tr from-[rgba(21,89,65,0.30)] from-0% via-[rgba(40,162,117,0.30)] via-65% to-[rgba(21,89,65,0.30)] to-95% relative p-4 flex justify-center"
    >
      <p className="text-center text-pretty">
        Bespoke, <br /> responsive-first design
      </p>
      <div className="absolute bottom-0 right-0 w-full flex justify-center">
        <ResponsiveFirstDesignSVG isHovered={isHovered} />
      </div>
    </div>
  );
}
