'use client';

import { updateQueryParams } from '@/lib/utils';
import { TBlogSortBy } from '@/types/blog';
import { Calendar, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RichSelect from '../rich-select';

export type RichSelectOption = {
  value: TBlogSortBy;
  label: string;
  icon?: React.ReactNode;
};

const sortOptions: RichSelectOption[] = [
  {
    value: 'views',
    label: 'Sort by views',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    value: 'dates',
    label: 'Sort by date',
    icon: <Calendar className="h-4 w-4" />,
  },
];

export default function SelectSort({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  const router = useRouter();

  function handleChange(value: string) {
    router.push(updateQueryParams({ sortBy: value }), { scroll: false });
  }

  return (
    <RichSelect
      options={sortOptions}
      onValueChange={handleChange}
      defaultValue={defaultValue || 'views'}
      placeholder="Sort by"
      className="mb-8"
    />
  );
}
