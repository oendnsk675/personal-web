import ArticleContent from '@/components/ArticleContent';
import LikeButton from '@/components/blog/like-button';
import Likes from '@/components/blog/likes';
import ViewCounter from '@/components/blog/view-counter';
import Comments from '@/components/comments';
import LineLights from '@/components/pattern/line-lights';
import { getDetailArticle } from '@/lib/content/getDetail';
import getSlugs from '@/lib/content/getSlugs';
import getTableOfContents from '@/lib/content/getTableOfContents';
import { getBlogBySlug } from '@/lib/supabase/queries/blog';
import { calcReadingTime } from '@/lib/utils';
import { Clock } from 'lucide-react';
import Image from 'next/image';

export const generateStaticParams = async () => {
  const slugs = getSlugs('articles');
  return slugs.map((slug) => ({ slug }));
};

interface Params {
  slug?: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}) => {
  const id = params?.slug ? ' - ' + params?.slug : '';
  return {
    title: `My Blog ${id.replaceAll('_', '')}`,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArticlePage = async (props: any) => {
  const slug = props.params.slug;

  const article = getDetailArticle(slug);
  const blog = await getBlogBySlug(slug);
  const toc = getTableOfContents('articles', slug);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="absolute w-full h-80">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="w-full h-80 bg-linear-to-t from-background absolute top-0"></div>
      </div>
      <main className="w-full xl:max-w-5xl px-4 lg:px-0 mt-80 mb-12">
        <section className="mb-8">
          {/* title and summary */}
          <div className="grid gap-4 mb-12">
            <h1 className="text-5xl font-bold">{article.title}</h1>
            <p className="text-lg text-muted-foreground">
              {article.description}
            </p>
          </div>

          {/* profile */}
          <div className="flex gap-4">
            <div className="size-10 bg-neutral-500 overflow-hidden rounded-full flex items-center justify-center relative">
              <Image
                src={'/images/profile.jpg'}
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid">
              <h4 className="font-semibold">Sayidina Ahmadal Qososyi</h4>
              <p className="text-xs text-muted-foreground">{article.date}</p>
            </div>
          </div>
        </section>
        {/* divider */}
        <div className="w-full grid mb-14">
          <hr />
          <div className="flex justify-between py-4">
            <div className="flex gap-4">
              <div className="flex gap-1.5 items-center">
                {slug && <ViewCounter slug={slug} />}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1.5 items-center">
                <Clock size={14} className="text-emerald-600" />
                <span className="text-xs text-muted-foreground">
                  {calcReadingTime(article.content)} min read
                </span>
              </div>
              <div className="flex gap-1.5 items-center">
                <Likes value={blog?.likes} />
              </div>
            </div>
          </div>
          <hr />
        </div>
        <section className="flex gap-4 min-h-screen relative mb-48">
          {/* content */}
          <div className="w-full md:w-3/4">
            <ArticleContent
              articleContent={article.content}
              articleTitle={article.title}
              folder="articles"
              loading={false}
              slug={slug}
            />
          </div>
          {/* table of contents */}
          <div
            className="hidden md:block md:sticky left-0 top-24 
              flex-1 h-96 overflow-hidden rounded-xl border"
          >
            <div className="h-full relative">
              <h4 className="sticky inset-0 p-5 bg-background font-semibold border-b">
                Table of Contents
              </h4>

              <div className="h-full overflow-y-scroll overflow-x-hidden flex flex-col  gap-4 p-5 pb-24">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    style={{ paddingLeft: `${(item.level - 1) * 8}px` }}
                    className="text-sm 
                    text-muted-foreground 
                    hover:text-foreground 
                    transition 
                    cursor-pointer
                    block"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* love */}
        <div
          id="like-button"
          className="w-full flex justify-center items-center mb-8 relative"
        >
          {slug && <LikeButton defaultValue={blog?.likes} slug={slug} />}
        </div>

        {/* divider */}
        <div className="w-full h-10 relative overflow-hidden mb-16">
          <div className="absolute left-0 bottom-0 z-20 h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
          <LineLights position="bottom" className="opacity-60" />
        </div>

        <Comments />
      </main>
    </div>
  );
};

export default ArticlePage;
