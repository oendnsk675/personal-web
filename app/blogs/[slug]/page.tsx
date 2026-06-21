import BlogDetailBottomDivider from '@/components/blog/detail/blog-detail-bottom-divider';
import BlogDetailComments from '@/components/blog/detail/blog-detail-comments';
import BlogDetailContent from '@/components/blog/detail/blog-detail-content';
import BlogDetailHeroImage from '@/components/blog/detail/blog-detail-hero-image';
import BlogDetailLike from '@/components/blog/detail/blog-detail-like';
import BlogDetailMetaDivider from '@/components/blog/detail/blog-detail-meta-divider';
import BlogDetailProfile from '@/components/blog/detail/blog-detail-profile';
import BlogDetailTitle from '@/components/blog/detail/blog-detail-title';
import BlogDetailToc from '@/components/blog/detail/blog-detail-toc';
import { getDetailArticle } from '@/lib/content/getDetail';
import getSlugs from '@/lib/content/getSlugs';
import getTableOfContents from '@/lib/content/getTableOfContents';
import { getBlogBySlug } from '@/lib/supabase/queries/blog';

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
      <BlogDetailHeroImage src={article.thumbnail} alt={article.title} />
      <main className="w-full xl:max-w-5xl px-4 lg:px-0 mt-80 mb-12">
        <section className="mb-8">
          <BlogDetailTitle
            title={article.title}
            description={article.description}
          />
          <BlogDetailProfile date={article.date} />
        </section>
        <BlogDetailMetaDivider
          content={article.content}
          likes={blog?.likes}
          slug={slug}
          views={blog?.views}
        />
        <section className="flex gap-4 min-h-screen relative mb-48">
          <BlogDetailContent
            content={article.content}
            slug={slug}
            title={article.title}
          />
          <BlogDetailToc toc={toc} />
        </section>
        <BlogDetailLike defaultValue={blog?.likes} slug={slug} />
        <BlogDetailBottomDivider />

        <BlogDetailComments />
      </main>
    </div>
  );
};

export default ArticlePage;
