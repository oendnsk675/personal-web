'use client';
import { cn } from '@/lib/utils';

export function CardNotes() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          ' cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between bg-linear-30 from-emerald-800/5 via-emerald-500/30 to-emerald-800/5 border border-emerald-800'
        )}
      >
        {/* title and views */}
        <div className="text content p-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Author Card
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>

        {/* category */}
        <div className="border-t p-4 border"></div>
      </div>
    </div>
  );
}
