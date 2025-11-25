'use client';

import { useBlogActions, useBlogData } from '@/lib/stores/useBlogStore';
import { formatNumber } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';

export default function Likes({ value }: { value: number }) {
  const { likes } = useBlogData();
  const { setLike } = useBlogActions();

  useEffect(() => {
    setLike({ value });
  }, [value]);

  return (
    <>
      <Heart size={14} className="text-emerald-600" />
      <span className="text-xs text-muted-foreground">
        {formatNumber(likes)} likes
      </span>
    </>
  );
}
