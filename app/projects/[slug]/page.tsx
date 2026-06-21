import HeaderLight from '@/components/blog/header-light';
import ProjectHeaderPattern from '@/components/pattern/project-header-pattern';
import ProjectDetailBottomDivider from '@/components/projects/detail/project-detail-bottom-divider';
import ProjectDetailComments from '@/components/projects/detail/project-detail-comments';
import ProjectDetailContent from '@/components/projects/detail/project-detail-content';
import ProjectDetailLike from '@/components/projects/detail/project-detail-like';
import ProjectDetailMetaDivider from '@/components/projects/detail/project-detail-meta-divider';
import ProjectDetailProfile from '@/components/projects/detail/project-detail-profile';
import ProjectDetailToc from '@/components/projects/detail/project-detail-toc';
import ProjectDetailTitle from '@/components/projects/detail/project-detail-title';
import { getDetailProject } from '@/lib/content/getDetail';
import getSlugs from '@/lib/content/getSlugs';
import getTableOfContents from '@/lib/content/getTableOfContents';
import { getBlogBySlug } from '@/lib/supabase/queries/blog';

export const generateStaticParams = async () => {
  const slugs = getSlugs('projects');
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
    title: `My Project ${id.replaceAll('_', '')}`,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArticlePage = async (props: any) => {
  const slug = props.params.slug;

  const detailProject = getDetailProject(slug);
  const metadata = await getBlogBySlug(slug);
  const toc = getTableOfContents('projects', slug);

  return (
    <div className="w-full flex flex-col items-center">
      <HeaderLight />
      <ProjectHeaderPattern />
      <main className="relative z-20 w-full xl:max-w-5xl px-4 lg:px-0 mt-40 xl:mt-80 mb-12">
        <section className="mb-8">
          <ProjectDetailTitle
            title={detailProject.title}
            description={detailProject.description}
          />
          <ProjectDetailProfile role={detailProject.role} />
        </section>
        <ProjectDetailMetaDivider
          content={detailProject.content}
          likes={metadata?.likes}
          slug={slug}
          codeUrl={detailProject.links.code}
          liveUrl={detailProject.links.live}
        />
        <section className="flex gap-4 min-h-screen relative mb-48">
          <ProjectDetailContent
            content={detailProject.content}
            images={detailProject.images}
            slug={slug}
            title={detailProject.title}
          />
          <ProjectDetailToc toc={toc} />
        </section>
        <ProjectDetailLike defaultValue={metadata?.likes} slug={slug} />
        <ProjectDetailBottomDivider />

        <ProjectDetailComments />
      </main>
    </div>
  );
};

export default ArticlePage;
