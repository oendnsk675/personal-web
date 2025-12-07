import { getAllBlogs } from '@/lib/content/getAll';
import ButtonSeeMore from '../button-see-more';
import CardBlog from '../card-blog';
import Fancytext from '../fancy-text';
import ComplexThings from '../pattern/complex-things';
import DashArrow from '../pattern/dash-arrow';

export default function Blogs() {
  const { data: blogs } = getAllBlogs({ limit: 3, order: 'desc' });

  return (
    <section className="w-full mt-36 mb-20 relative">
      <div className="w-full flex flex-col items-center gap-8 mb-32">
        <ComplexThings />

        <p className="text-center text-pretty w-[376px]">
          I explore how systems work and share the principles that make them
          easier to design, explain, and build.
        </p>
      </div>

      {/* blogs listcards */}
      <div className="">
        <div className="flex gap-1 md:gap-3 items-center mb-6 md:mb-0">
          <Fancytext firstWord="Featured" secondWord="Posts" />
          <DashArrow className="mt-20" />
        </div>

        {blogs?.map((content, item) => (
          <CardBlog content={content} key={item} />
        ))}
        <ButtonSeeMore />
      </div>
    </section>
  );
}
