import { cn } from '@/lib/utils';

export default function LineLights({
  className,
  position = 'top',
}: {
  className?: string;
  position?: 'top' | 'bottom';
}) {
  return (
    <div
      className={cn(
        'w-full absolute flex justify-center left-0',
        className,
        position === 'top' ? 'top-0' : 'bottom-0'
      )}
    >
      <div className="w-[40rem] relative">
        <div
          className={cn(
            'absolute inset-x-20 bg-linear-to-r from-transparent via-emerald-400/80 to-transparent h-[5px] w-3/4 blur-sm',
            position === 'top' ? 'top-0' : 'bottom-0'
          )}
        ></div>
        <div
          className={cn(
            'absolute inset-x-20 bg-linear-to-r from-transparent via-emerald-400/80 to-transparent h-px w-3/4',
            position === 'top' ? 'top-0' : 'bottom-0'
          )}
        ></div>
        <div
          className={cn(
            'absolute inset-x-60 bg-linear-to-r from-transparent via-sky-500/20 to-transparent h-[5px] w-1/4 blur-sm',
            position === 'top' ? 'top-0' : 'bottom-0'
          )}
        ></div>
        <div
          className={cn(
            'absolute inset-x-60 bg-linear-to-r from-transparent via-sky-500/20 to-transparent h-px w-1/4',
            position === 'top' ? 'top-0' : 'bottom-0'
          )}
        ></div>
        <div className="hidden opacity-0 w-full h-full" style={{ opacity: 1 }}>
          <div id="«r0»" className="h-full w-full">
            <canvas
              data-generated="true"
              style={{ width: '100% !important', height: '100% !important' }}
              aria-hidden="true"
              height="200"
              width="800"
            ></canvas>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-background mask-[radial-linear(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
