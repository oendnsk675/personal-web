import { Skeleton } from './ui/skeleton';

export default function CardProjectSekleton() {
  return (
    <div className="w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col-reverse md:flex-row justify-between gap-6 py-4 md:py-8"
        >
          <div className="flex-1 border rounded-2xl p-7 relative">
            <div className="flex flex-col gap-4 mb-4">
              <Skeleton className="h-10 w-3/4 max-w-[420px]" />
              <Skeleton className="h-12 w-full max-w-[720px]" />
            </div>

            <div className="flex items-center gap-2 mb-8">
              <Skeleton className="h-6 w-12" />
              <Skeleton className="size-7 rounded" />
              <Skeleton className="size-7 rounded" />
              <Skeleton className="size-7 rounded" />
              <Skeleton className="h-7 w-16" />
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-4">
                <Skeleton className="h-9 w-32 rounded-md" />
                <Skeleton className="h-9 w-28 rounded-md" />
              </div>
              <Skeleton className="hidden h-4 w-28 sm:block" />
            </div>
          </div>

          <Skeleton className="hidden md:block md:w-72 aspect-square rounded-lg border p-6" />
        </div>
      ))}
    </div>
  );
}
