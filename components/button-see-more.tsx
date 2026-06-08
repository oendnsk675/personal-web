import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ButtonSeeMore({
  href,
  label = 'See more',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="flex justify-center mt-8">
      <Link href={href || '/'} className="flex gap-1.5 items-center cursor-custom">
        <span className='text-muted-foreground'>{label}</span>
        <p className="w-7 h-7 rounded-lg border flex items-center justify-center">
          <ArrowRight size={16} />
        </p>
      </Link>
    </div>
  );
}
