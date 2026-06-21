'use client';

import { incrementView } from '@/app/blogs/[slug]/actions';
import { formatNumber } from '@/lib/utils';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ViewCounter({
  slug,
  defaultViews = 0,
  increment = true,
}: {
  slug: string;
  defaultViews?: number;
  increment?: boolean;
}) {
  const [views, setViews] = useState(defaultViews);

  useEffect(() => {
    if (!increment) return;

    async function load() {
      const views = await incrementView(slug);
      setViews(views);
    }
    load();
  }, [slug, increment]);

  return (
    <>
      <Eye size={14} className="text-emerald-600" />
      <span className="text-xs text-muted-foreground">
        {formatNumber(views)} views
      </span>
    </>
  );
}
