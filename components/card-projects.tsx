import { Swift } from '@/components/icons/swift';
import { ProjectPattern1 } from '@/components/pattern/project-pattern';
import { Button } from '@/components/ui/button';
import erentadaLogo from '@/public/images/erentada-logo.svg';
import erentadaMockup from '@/public/images/erentada-mockup.svg';
import { ArrowRight, Link2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CardProject() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between gap-6 py-4 md:py-8"
    >
      {/* Left */}
      <div className="flex-1 border rounded-2xl p-7 relative">
        {/* backdrop when mobile version */}
        <ProjectPattern1 className="absolute top-0 right-0 md:hidden" />

        {/* title & description */}
        <div className="flex flex-col gap-4 mb-4">
          <h1 className="text-4xl font-bold">E-Rentada</h1>
          <p className="text-pretty">
            A web-based room booking app built with Next.js, featuring real-time
            availability and an intuitive interface for easy reservation
            management.
          </p>
        </div>
        {/* tools */}
        <div className="flex items-center gap-2 mb-8">
          <span>Tools</span>
          <div className="flex gap-2">
            {[1, 2, 3].map((item) => (
              <Swift key={item} width={18} fill="red" />
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="flex items-center justify-between gap-2">
          <Button variant={'outline'}>
            <span>View Project</span>
            <ArrowRight size={16} />
          </Button>
          <Link
            href="https://erentada.vercel.app/"
            className="flex gap-1 text-muted-foreground hover:text-foreground items-center"
          >
            <Link2 size={16} />
            <span className="text-xs">Open Live Site</span>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="hidden md:block md:w-72 aspect-square border overflow-hidden rounded-lg relative p-6">
        <ProjectPattern1 className="absolute top-0 right-0" />
        <Image src={erentadaLogo} alt="erentada logo" />
        <Image
          src={erentadaMockup}
          alt="erentada mockup"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
