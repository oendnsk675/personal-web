'use client';

import { cn, updateQueryParams } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function FilterTopic({
  value,
  options,
}: {
  value?: string;
  options?: string[];
}) {
  const router = useRouter();

  useEffect(() => {
    if (!value) return;

    router.push(updateQueryParams({ topic: value }), { scroll: false });
  }, [value]);

  return (
    <div className="mb-8">
      <div className="flex gap-2 items-center mb-4">
        <h4 className="font-semibold">Choose topics</h4>
        {value && (
          <Link href={'/blogs'} className="hover:opacity-75">
            <X className="size-4" />
          </Link>
        )}
      </div>
      <div className="flex items-center flex-wrap gap-1">
        {options &&
          options.map((item) => (
            <Link
              href={`/blogs?topic=${item}`}
              key={item}
              className={cn(
                'p-1 px-2 bg-white/5 rounded-xl text-sm hover:opacity-75',
                value == item && 'bg-emerald-900/50'
              )}
            >
              {item}
            </Link>
          ))}
      </div>
    </div>
  );
}
