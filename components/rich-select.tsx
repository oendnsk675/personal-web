'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export interface RichSelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface RichSelectProps {
  options: RichSelectOption[];
  placeholder?: string;
  className?: string;
}

export default function RichSelect({
  options,
  placeholder = 'Select option',
  value,
  onValueChange,
  className,
  ...props
}: RichSelectProps & React.ComponentProps<typeof Select>) {
  const selectedOption = options.find((o) => o.value === value);

  return (
    <Select value={value} onValueChange={onValueChange} {...props}>
      <SelectTrigger
        className={cn(
          'w-full flex gap-2 items-center cursor-custom',
          className
        )}
      >
        {selectedOption ? (
          <div className="flex items-center gap-2">
            {selectedOption.icon}
            {selectedOption.label}
          </div>
        ) : (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>

      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            <div className="flex items-center gap-2">
              {opt.icon}
              {opt.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
