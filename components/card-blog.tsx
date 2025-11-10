import thumbnailExample from '@/public/images/thumbnail.jpg';
import { Clock } from 'lucide-react';
import Image from 'next/image';

export default function CardBlog() {
  return (
    <div
      className="flex flex-col-reverse gap-4 md:flex-row justify-between py-8 border-b"
    >
      {/* left */}
      <div className="flex-1 flex flex-col gap-3">
        <span className="text-sm">December 1, 2025</span>
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-bold">Example title lorem ipsum</h4>
          <p className="text-pretty">
            An in-depth guide on how to animate enter and exit animation for
            list using Motion for React (previously Framer Motion).
          </p>
        </div>
        <div className="flex gap-1.5 items-center">
          <Clock size={14} className="text-emerald-600" />
          <span className="text-xs">6 min read</span>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-60 aspect-video overflow-hidden rounded-lg">
        <Image
          src={thumbnailExample}
          className="w-full h-full bg-cover"
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
