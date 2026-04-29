import LineLights from './pattern/line-lights';
import { Skeleton } from './ui/skeleton';

export default function CardProjectSekleton() {
  return (
    <div className="">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row md:items-start justify-between py-8 border-b group cursor-custom relative overflow-hidden"
        >
          <LineLights
            position="bottom"
            className="opacity-0 group-hover:opacity-50 transition-all duration-150"
          />

          {/* left */}
          <div className="flex-1 flex flex-col gap-3 relative z-20">
            {/* date */}
            <Skeleton className="w-[135px] h-5" />
            {/* title and summary */}
            <div className="flex flex-col gap-1 md:mb-4">
              <Skeleton className="w-[370px] h-5" />
              <Skeleton className="w-[567px] h-[72px]" />
            </div>

            {/* metadata */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center md:justify-between">
              <Skeleton className="w-[135px] h-5" />
              <Skeleton className="w-[70px] h-5" />
            </div>
          </div>
          {/* right */}
          <Skeleton className="w-full md:w-60 aspect-video overflow-hidden rounded-lg relative z-20 border" />
        </div>
      ))}
    </div>
  );
}
