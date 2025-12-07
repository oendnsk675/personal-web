'use client';
import { cn } from '@/lib/utils';
import { TNoteMarkdown } from '@/types/notes';
import Link from 'next/link';
import { stackIcons } from '../stack-icons';

export function CardNotes({ note }: { note: TNoteMarkdown }) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link
        href={`/notes/${note.slug}`}
        className={cn(
          'cursor-custom overflow-hidden relative card h-52 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between bg-linear-30 from-slate-800/5 via-slate-500/10 to-slate-800/5 border hover:opacity-75 transition-all duration-150'
        )}
      >
        <div className="flex items-center gap-2 justify-end p-2 border-b">
          <div className="w-2 h-2 rounded-xs border bg-neutral-400 opacity-45"></div>
          <div className="w-2 h-2 rounded-xs border bg-emerald-400 opacity-45"></div>
          <div className="w-2 h-2 rounded-xs border bg-emerald-100 opacity-45"></div>
        </div>

        {/* title and views */}
        <div className="text content p-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {note.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {note.description}
          </p>
        </div>

        {/* category */}
        <div className="flex items-center gap-2 border-t p-4">
          {note?.categories.map((category) => (
            <span
              key={category}
              className="flex items-center justify-center p-1 rounded bg-white/20 text-sm"
            >
              {stackIcons[category] ?? category}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
