'use client';

import { incrementView } from '@/app/blogs/[slug]/actions';
import { formatNumber } from '@/lib/utils';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    async function load() {
      const views = await incrementView(slug);
      setViews(views);
    }
    load();
  }, [slug]);
  return (
    <>
      <Eye size={14} className="text-emerald-600" />
      <span className="text-xs text-muted-foreground">
        {formatNumber(views)} views
      </span>
    </>
  );
}
