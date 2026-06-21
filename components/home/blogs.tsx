import { getAllBlogs } from '@/lib/content/getAll';
import ButtonSeeMore from '../button-see-more';
import CardBlog from '../card-blog';
import Fancytext from '../fancy-text';
import ComplexThings from '../pattern/complex-things';
import DashArrow from '../pattern/dash-arrow';
import BlogsSubtitle from './blogs-subtitle';

export default async function Blogs() {
  const { data: blogs } = await getAllBlogs({ limit: 3, sort: 'desc' });

  return (
    <section className="w-full mt-36 mb-36 relative">
      <div className="w-full flex flex-col items-center gap-8 mb-32 hidden">
        <ComplexThings />

        <p className="text-center text-pretty w-[476px] px-4">
          I value clarity through thoughtful thinking. Here are selected notes
          that capture how I unpack complex topics.
        </p>
      </div>

      {/* blogs listcards */}
      <div className="mx-1">
        <div className="mb-6 md:mb-0">
          <div className="relative w-fit flex gap-1 md:gap-3 items-center mb-4">
            <Fancytext firstWord="Featured" secondWord="Posts" />
            <DashArrow className="absolute -right-24 -bottom-10" />
          </div>
          <BlogsSubtitle />
        </div>

        {blogs?.map((content, item) => (
          <CardBlog content={content} key={item} />
        ))}
        <ButtonSeeMore href="/blogs" label="See more blogs" />
      </div>
    </section>
  );
}
