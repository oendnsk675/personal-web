import { cn } from '@/lib/utils';

export default function Fancytext({
  firstWord,
  secondWord,
  className,
}: {
  firstWord: string;
  secondWord: string;
  className?: string;
}) {
  return (
    <h1 className={cn('text-4xl md:text-5xl font-bold', className)}>
      <span>{firstWord}</span>
      <span className="transition-colors bg-linear-to-br from-emerald-600/30 via-emerald-600/90 to-emerald-600/30 ml-2 bg-clip-text text-transparent">
        {secondWord}
      </span>
    </h1>
  );
}
