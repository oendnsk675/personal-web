import NoteDetailBottomDivider from '@/components/notes/detail/note-detail-bottom-divider';
import NoteDetailComments from '@/components/notes/detail/note-detail-comments';
import NoteDetailContent from '@/components/notes/detail/note-detail-content';
import NoteDetailHero from '@/components/notes/detail/note-detail-hero';
import NoteDetailLike from '@/components/notes/detail/note-detail-like';
import NoteDetailMetaDivider from '@/components/notes/detail/note-detail-meta-divider';
import NoteDetailProfile from '@/components/notes/detail/note-detail-profile';
import NoteDetailTitle from '@/components/notes/detail/note-detail-title';
import NoteDetailToc from '@/components/notes/detail/note-detail-toc';
import { getDetailNote } from '@/lib/content/getDetail';
import getSlugs from '@/lib/content/getSlugs';
import getTableOfContents from '@/lib/content/getTableOfContents';
import { getBlogBySlug } from '@/lib/supabase/queries/blog';

export const generateStaticParams = async () => {
  const slugs = getSlugs('notes');
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
const NotesPage = async (props: any) => {
  const slug = props.params.slug;

  const notes = getDetailNote(slug);
  const metadata = await getBlogBySlug(slug);
  const toc = getTableOfContents('notes', slug);

  return (
    <div className="w-full flex flex-col items-center">
      <NoteDetailHero date={notes.date} />
      <main className="relative z-40 w-full xl:max-w-5xl px-4 lg:px-0 mb-12">
        <section className="mb-8">
          <NoteDetailTitle
            title={notes.title}
            description={notes.description}
          />
          <NoteDetailProfile date={notes.date} />
        </section>
        <NoteDetailMetaDivider
          content={notes.content}
          likes={metadata?.likes}
          slug={slug}
        />
        <section className="flex gap-4 min-h-screen relative mb-48">
          <NoteDetailContent
            content={notes.content}
            slug={slug}
            title={notes.title}
          />
          <NoteDetailToc toc={toc} />
        </section>
        <NoteDetailLike defaultValue={metadata?.likes} slug={slug} />
        <NoteDetailBottomDivider />

        <NoteDetailComments />
      </main>
    </div>
  );
};

export default NotesPage;
