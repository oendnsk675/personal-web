import thumbnailExample from '@/public/images/thumbnail.jpg';
import { Clock, Eye } from 'lucide-react';
import Image from 'next/image';
import LineLights from './pattern/line-lights';

export default function CardBlog() {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row justify-between py-8 border-b group cursor-custom relative overflow-hidden">
      <LineLights
        position="bottom"
        className="opacity-0 group-hover:opacity-50 transition-all duration-150"
      />

      {/* left */}
      <div className="flex-1 flex flex-col gap-3 relative z-20">
        <span className="text-sm">December 1, 2025</span>
        <div className="flex flex-col gap-1">
          <div className="relative w-fit">
            <div className="opacity-0 group-hover:opacity-100 absolute -z-10 inset-0 w-full h-full bg-linear-to-r from-transparent via-emerald-500/50 to-transparent transition-all duration-150"></div>
            <h4 className="text-lg font-bold">Example title lorem ipsum</h4>
          </div>
          <p className="text-pretty">
            An in-depth guide on how to animate enter and exit animation for
            list using Motion for React (previously Framer Motion).
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex gap-1.5 items-center">
              <Clock size={14} className="text-emerald-600" />
              <span className="text-xs">6 min read</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Eye size={14} className="text-emerald-600" />
              <span className="text-xs">1,000 views</span>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 w-1/2">
            <div className="p-0.5 px-4 text-xs rounded-2xl bg-emerald-900">
              css
            </div>
            <div className="p-0.5 px-4 text-xs rounded-2xl bg-emerald-900">
              html
            </div>
            <div className="p-0.5 px-4 text-xs rounded-2xl bg-emerald-900">
              javascript
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-60 aspect-video overflow-hidden rounded-lg relative z-20">
        <Image
          src={thumbnailExample}
          className="w-full h-full bg-cover"
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
