import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const MAX_VISIBLE = 2;

type TProps = {
  categories?: string[];
};

export default function BlogCategories({ categories = [] }: TProps) {
  const visibleCategories = categories.slice(0, MAX_VISIBLE);
  const invisibleCategories = categories.slice(MAX_VISIBLE, categories.length);
  const remainingCount = categories.length - MAX_VISIBLE;

  return (
    <>
      {visibleCategories.map((category) => (
        <div
          key={category}
          className="p-0.5 px-4 text-xs rounded bg-emerald-900/50"
        >
          {category}
        </div>
      ))}

      {remainingCount > 0 && (
        <Tooltip>
          <TooltipTrigger
            aria-label={`${remainingCount} more categories: ${invisibleCategories.join(', ')}`}
            className="min-h-6 p-0.5 px-4 text-xs rounded bg-emerald-900/50 cursor-custom"
          >
            +{remainingCount}
          </TooltipTrigger>
          <TooltipContent>{invisibleCategories.join(', ')}</TooltipContent>
        </Tooltip>
      )}
    </>
  );
}
