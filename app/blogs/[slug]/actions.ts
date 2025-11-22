'use server';

import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function incrementView(slug: string) {
  try {
    const cookieName = `viewed_${slug}`;
    const cookieStore = await cookies();
    const hasViewed = cookieStore.get(cookieName);

    const supabase = await createClient();

    if (hasViewed) {
      const { data } = await supabase
        .from('blog_views')
        .select('views')
        .eq('slug', slug)
        .single();

      return data?.views ?? 0;
    }

    const { data, error } = await supabase.rpc('increment_blog_view', {
      slug_input: slug,
    });

    cookieStore.set(cookieName, 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
      secure: true,
    });

    return data;
  } catch (error) {
    throw error;
  }
}
