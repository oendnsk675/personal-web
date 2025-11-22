import ArticleContent from '@/components/ArticleContent';
import Love from '@/components/blog/love';
import getArticleContent from '@/lib/getArticleContent';
import getArticleMetadata from '@/lib/getArticleMetadata';
import getTableOfContents from '@/lib/getTableOfContents';
import { getBlogBySlug } from '@/lib/supabase/queries/blog';
import { calcReadingTime, formatNumber } from '@/lib/utils';
import { Clock, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import { incrementView } from './actions';

export const generateStaticParams = async () => {
  const articles = getArticleMetadata('articles');
  return articles.map((article) => ({ slug: article.slug }));
};

interface Params {
  slug?: string;
}

interface SearchParams {
  [key: string]: string | string[];
}

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const id = params?.slug ? ' - ' + params?.slug : '';
  return {
    title: `My Blog ${id.replaceAll('_', '')}`,
  };
};

const ArticlePage = async (props: any) => {
  const slug = props.params.slug;
  
  const article = getArticleContent('articles/', slug);
  const blog = await getBlogBySlug(slug);
  const views = await incrementView(slug);
  const toc = getTableOfContents('articles/', slug);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="absolute w-full h-80">
        <Image
          src={article.data.thumbnail}
          alt={article.data.title}
          fill
          className="object-cover"
        />
        <div className="w-full h-80 bg-linear-to-t from-background absolute top-0"></div>
      </div>
      <main className="w-full xl:max-w-5xl px-4 lg:px-0 mt-80 mb-12">
        <section className="mb-8">
          {/* title and summary */}
          <div className="grid gap-2 mb-8">
            <h1 className="text-5xl font-bold">{article.data.title}</h1>
            <p className="text-lg text-muted-foreground">
              {article.data.description}
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
              <p className="text-xs text-muted-foreground">
                {article.data.date}
              </p>
            </div>
          </div>
        </section>
        {/* divider */}
        <div className="w-full grid mb-14">
          <hr />
          <div className="flex justify-between py-4">
            <div className="flex gap-4">
              <div className="flex gap-1.5 items-center">
                {/* TODO: Next iterasi akan tambah feature ini makek supabase untuk save */}
                <Eye size={14} className="text-emerald-600" />
                <span className="text-xs text-muted-foreground">
                  {formatNumber(views)} views
                </span>
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
                <Heart size={14} className="text-emerald-600" />
                <span className="text-xs text-muted-foreground">
                  {formatNumber(blog?.like)} likes
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <section className="flex gap-4 min-h-screen relative mb-24">
          {/* content */}
          <div className="w-full md:w-3/4">
            <ArticleContent
              articleContent={article.content}
              articleTitle={article.data.title}
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

              <div className="h-full overflow-y-scroll overflow-x-hidden grid gap-4 p-5">
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
        <Love />
      </main>
    </div>
  );
};

export default ArticlePage;
