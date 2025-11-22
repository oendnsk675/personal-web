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
        .from('blogs')
        .select('views')
        .eq('slug', slug)
        .single();

      return data?.views ?? 0;
    }

    const { data, error } = await supabase.rpc('increment_blog_view', {
      slug_input: slug,
    });

    cookieStore.set(cookieName, 'true', {
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function toggleLike(slug: string) {
  const cookieName = `like_${slug}`;
  const cookieStore = await cookies();
  const hasLiked = cookieStore.get(cookieName);

  const supabase = await createClient();

  if (!hasLiked || hasLiked.value == 'false') {
    const { data, error } = await supabase.rpc('update_blog_like', {
      slug_input: slug,
      value: 1,
    });

    cookieStore.set(cookieName, 'true', {
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
    });

    return { likes: data, hasLiked: true };
  } else {
    const { data } = await supabase.rpc('update_blog_like', {
      slug_input: slug,
      value: -1,
    });

    cookieStore.set(cookieName, 'false', {
      path: '/',
      maxAge: 86400,
      sameSite: 'lax',
    });

    return { likes: data, hasLiked: false };
  }
}
