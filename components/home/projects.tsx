import { getAllProjects } from '@/lib/content/getAll';
import ButtonSeeMore from '../button-see-more';
import CardProject from '../card-projects';
import Fancytext from '../fancy-text';
import DashArrow from '../pattern/dash-arrow';

export default function Projects() {
  const { data: projects } = getAllProjects({ limit: 3, sort: 'desc' });

  return (
    <section className="w-full mb-20">
      {/* projects listcards */}
      <div className="">
        <div className="mb-6 md:mb-0">
          <div className="relative w-fit flex gap-1 md:gap-3 items-center mb-4">
            <Fancytext firstWord="Featured" secondWord="Projects" />
            <DashArrow className="absolute -right-24 -bottom-10" />
          </div>
          <p className="text-pretty text-muted-foreground hidden">
            Some of my favorite writing.
          </p>
        </div>

        {projects.map((project, index) => (
          <CardProject data={project} index={index} key={index} />
        ))}
        <ButtonSeeMore href="/projects" label="See more projects" />
      </div>
    </section>
  );
}
