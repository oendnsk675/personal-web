import { getAllProjects } from '@/lib/content/getAll';
import dashArrow1 from '@/public/images/dash-arrow-1.svg';
import Image from 'next/image';
import ButtonSeeMore from '../button-see-more';
import CardProject from '../card-projects';

export default function Projects() {
  const { data: projects } = getAllProjects({ limit: 3, order: 'desc' });

  return (
    <section className="w-full mb-20">
      {/* projects listcards */}
      <div className="">
        <div className="flex gap-1 md:gap-3 items-center">
          <h1 className="text-4xl font-bold">
            <span>Featured</span>
            <span className="transition-colors bg-linear-to-br from-emerald-600/30 via-emerald-600/90 to-emerald-600/30 ml-2 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <Image
            src={dashArrow1}
            alt="dash-arrow-1"
            className="rotate-12 md:rotate-0 mt-20"
          />
        </div>

        {projects.map((project, index) => (
          <CardProject data={project} index={index} key={index} />
        ))}
        <ButtonSeeMore />
      </div>
    </section>
  );
}
