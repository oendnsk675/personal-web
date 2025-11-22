'use client';

import { toggleLike } from '@/app/blogs/[slug]/actions';
import { useBlogActions, useBlogData } from '@/lib/stores/useBlogStore';
import { cn, formatNumber, getCookie } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';

export default function LikeButton({
  defaultValue = 0,
  slug,
}: {
  defaultValue: number;
  slug: string;
}) {
  const { likes, hasLiked } = useBlogData();
  const { toggleHasLike, setLike } = useBlogActions();

  async function handleToggleLike(slug: string) {
    const { likes, hasLiked } = await toggleLike(slug);

    setLike(likes);
    toggleHasLike({ value: hasLiked });
    setLike(likes);
  }

  useEffect(() => {
    const hasLiked = getCookie(`like_${slug}`) === 'true';
    toggleHasLike({ value: hasLiked });
  }, [slug]);

  return (
    <>
      <button
        onClick={() => handleToggleLike(slug)}
        className="w-fit relative cursor-custom group transition-all duration-700"
      >
        <p className="absolute -top-20 left-1/2 -translate-x-1/2 -z-10 w-fit h-full flex justify-center items-center font-sans font-extrabold text-9xl bg-linear-to-b from-accent to-transparent bg-clip-text text-transparen text-transparent text-stroke text-stroke-accent">
          {likes && formatNumber(likes)}
        </p>
        <div
          className={cn(
            'bg-background/75 size-24 aspect-square rounded-full border flex justify-center items-center',
            hasLiked
              ? 'group-hover:bg-background/75 bg-linear-to-b from-accent to-emerald-400/10'
              : 'bg-background/75 group-hover:bg-linear-to-b group-hover:from-accent group-hover:to-emerald-400/10'
          )}
        >
          <Heart
            strokeWidth={0}
            className={cn(
              'group-hover:fill-emerald-500/50 size-14',
              hasLiked ? 'fill-emerald-500/50' : 'fill-accent'
            )}
          />
        </div>
      </button>
    </>
  );
}
