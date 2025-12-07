'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function CrouselProject({ items }: { items: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {items.map((item, index) => {
            if (item !== '' && item !== undefined) {
              return (
                <CarouselItem key={item}>
                  <div className="relative w-full aspect-video">
                    <Image
                      src={item}
                      alt={`slide-${index}`}
                      fill
                      className="object-cover rounded-lg object-top"
                    />
                  </div>
                  {/* <h1 className="font-tulisan text-3xl">Thumbnail</h1> */}
                </CarouselItem>
              );
            } else {
              return (
                <CarouselItem>
                  <h1 className="font-tulisan text-3xl">Thumbnail</h1>
                </CarouselItem>
              );
            }
          })}
        </CarouselContent>
        <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
        <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
      </Carousel>
      <div className="mt-4 flex items-center justify-end gap-2">
        {Array.from({ length: items.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn('h-3.5 w-3.5 rounded-full border-2', {
              'border-primary': current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
