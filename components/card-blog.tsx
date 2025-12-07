import getDateFormat from '@/lib/content/getDateFormat';
import { calcReadingTime } from '@/lib/utils';
import { TBlogMarkdown } from '@/types/blog';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ViewCounter from './blog/view-counter';
import LineLights from './pattern/line-lights';

type TContent = {
  content: TBlogMarkdown;
};

export default function CardBlog({ content }: TContent) {
  return (
    <Link
      href={`/blogs/${content.slug}`}
      className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row md:items-start justify-between py-8 border-b group cursor-custom relative overflow-hidden"
    >
      <LineLights
        position="bottom"
        className="opacity-0 group-hover:opacity-50 transition-all duration-150"
      />

      {/* left */}
      <div className="flex-1 flex flex-col gap-3 relative z-20">
        {/* date */}
        <span className="text-sm">{getDateFormat(content.date)}</span>
        {/* title and summary */}
        <div className="flex flex-col gap-1 md:mb-4">
          <div className="relative w-fit">
            <div className="opacity-0 group-hover:opacity-100 absolute -z-10 inset-0 w-full h-full bg-linear-to-r from-transparent via-emerald-500/50 to-transparent transition-all duration-150"></div>
            <h4 className="text-lg font-bold">{content.title}</h4>
          </div>
          <p className="text-pretty">{content.description}</p>
        </div>

        {/* metadata */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center md:justify-between">
          {/* minutes read */}
          <div className="flex items-center gap-4 flex-1">
            <div className="flex gap-1.5 items-center">
              <Clock size={14} className="text-emerald-600" />
              <span className="text-xs text-muted-foreground">
                {calcReadingTime(content.content)} min read
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              {content.slug && <ViewCounter slug={content.slug} />}
            </div>
          </div>

          {/* views */}
          <div className="flex flex-wrap md:justify-end items-center gap-2 md:w-1/2">
            {content?.categories?.map((category) => (
              <div
                key={category}
                className="p-0.5 px-4 text-xs rounded bg-emerald-900/50"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-60 aspect-video overflow-hidden rounded-lg relative z-20 border">
        {content.thumbnail ? (
          <Image
            src={content.thumbnail}
            fill
            className="w-full h-full bg-cover"
            alt="thumbnail"
          />
        ) : (
          <div className="w-full h-full bg-linear-150 from-[#2E996C]/30 to-[#0F3324]/30 flex items-center justify-center">
            <h1 className="font-tulisan text-3xl">Thumbnail</h1>
          </div>
        )}
      </div>
    </Link>
  );
}
