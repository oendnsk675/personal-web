import dashArrow1 from '@/public/images/dash-arrow-1.svg';
import sloganPost from '@/public/images/slogan.svg';
import Image from 'next/image';
import ButtonSeeMore from '../button-see-more';
import CardBlog from '../card-blog';

export default function Blogs() {
  return (
    <section className="w-full mt-36 mb-20">
      <div className="w-full flex flex-col items-center gap-8 mb-32">
        <Image src={sloganPost} alt="slogan" />

        <p className="text-center text-pretty w-[376px]">
          I'm sharing how I approach something and how my mental model affect my
          learning about a certain topic.
        </p>
      </div>

      {/* blogs listcards */}
      <div className="">
        <div className="flex gap-1 md:gap-3 items-center mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span>Featured</span>
            <span className="transition-colors bg-linear-to-br from-emerald-600/30 via-emerald-600/90 to-emerald-600/30 ml-2 bg-clip-text text-transparent">
              Posts
            </span>
          </h1>
          <Image src={dashArrow1} alt="dash-arrow-1" className="mt-20" />
        </div>

        {[1, 2, 3].map((item) => (
          <CardBlog key={item} />
        ))}
        <ButtonSeeMore />
      </div>
    </section>
  );
}
