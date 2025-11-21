import { Heart } from 'lucide-react';

export default function Love() {
  return (
    <div className="w-full flex justify-center items-center">
      <button className="w-fit relative cursor-custom">
        <Heart size={150} strokeWidth={0} className="fill-accent" />
        <div className="absolute inset-0 w-full h-full flex justify-center font-semibold text-xl items-center">
          10
        </div>
      </button>
    </div>
  );
}
