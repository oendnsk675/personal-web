import { createClient } from '../server';

export async function getBlogBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single();
    return data;
  } catch (error) {
    throw error;
  }
}
