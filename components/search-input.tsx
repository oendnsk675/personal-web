'use client';

import { useShortcut } from '@/hooks/useShortcut';
import { updateQueryParams } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';

type TProps = {
  debounceMs?: number;
};

export default function SearchInput({ debounceMs = 300 }: TProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTitle = searchParams.get('title') ?? '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(currentTitle);

  useShortcut('s', () => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextTitle = value.trim();

      if (nextTitle === currentTitle) return;

      router.replace(updateQueryParams({ title: nextTitle || null }), {
        scroll: false,
      });
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [value, currentTitle, debounceMs, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputGroup className="w-full md:w-lg">
      <InputGroupInput
        ref={inputRef}
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">Shift S</InputGroupAddon>
    </InputGroup>
  );
}
