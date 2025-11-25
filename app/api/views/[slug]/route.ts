import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const cookieName = `viewed_${slug}`;

  const cookieStore = await cookies();
  const hasViewed = cookieStore.get(cookieName);

  const supabase = await createClient();

  if (!hasViewed) {
    await supabase.rpc('increment_blog_view', { slug_input: slug });

    cookieStore.set(cookieName, 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
      secure: true,
    });
  }

  const { data } = await supabase
    .from('blog_views')
    .select('views')
    .eq('slug', slug)
    .single();

  return Response.json({ views: data?.views ?? 0 });
}
