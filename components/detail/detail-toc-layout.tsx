'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

export type TocItem = {
  id: string;
  level: number;
  text: string;
};

const DESKTOP_TOC_STORAGE_KEY = 'detail-toc-desktop-open';

function TocLinks({
  toc,
  onNavigate,
}: {
  toc: TocItem[];
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Table of contents" className="flex flex-col gap-4">
      {toc.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onNavigate}
          style={{ paddingLeft: `${Math.max(item.level - 1, 0) * 8}px` }}
          className="block text-sm text-muted-foreground transition hover:text-foreground"
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}

export default function DetailTocLayout({
  children,
  toc,
}: {
  children: ReactNode;
  toc: TocItem[];
}) {
  const [desktopOpen, setDesktopOpen] = useState(true);

  useEffect(() => {
    setDesktopOpen(localStorage.getItem(DESKTOP_TOC_STORAGE_KEY) !== 'false');
  }, []);

  function setDesktopToc(open: boolean) {
    setDesktopOpen(open);
    localStorage.setItem(DESKTOP_TOC_STORAGE_KEY, String(open));
  }

  return (
    <section className="relative mb-48 flex min-h-screen gap-4">
      <div className="min-w-0 flex-1">{children}</div>

      <div className="hidden md:block">
        {desktopOpen ? (
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="relative sticky top-[16px] h-96 w-72 overflow-visible rounded-xl border"
          >
            <div className="h-full overflow-hidden rounded-xl">
              <h2 className="border-b p-5 font-semibold">Table of Contents</h2>
              <div className="h-[calc(100%-57px)] overflow-y-auto p-5 pb-24">
                <TocLinks toc={toc} />
              </div>
            </div>
            <div className="absolute top-[16px] right-[16px]">
              <TocToggle open={desktopOpen} onClick={() => setDesktopToc(false)} />
            </div>
          </motion.aside>
        ) : (
          <div className="sticky top-[16px] w-0 translate-x-[16px]">
            <TocToggle open={desktopOpen} onClick={() => setDesktopToc(true)} />
          </div>
        )}
      </div>

    </section>
  );
}

function TocToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  const label = open ? 'Collapse table of contents' : 'Expand table of contents';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="rounded-full"
          aria-label={label}
          aria-expanded={open}
          onClick={onClick}
        >
          {open ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left" sideOffset={8}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
