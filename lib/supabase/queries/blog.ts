import { TBlogSort, TBlogSortBy } from '@/types/blog';
import { createClient } from '../server';

/**
 * Get metadata of blogs with pagination.
 * @param {number} [limit=10] - The number of items to return per page.
 * @param {number} [page=1] - The page number to return.
 * @param {TBlogSort} [sort='asc'] - The sort order of the results.
 * @param {TBlogSortBy} [sortBy='views'] - The field to sort by.
 * @returns {Promise<{ slug: string; views: number; likes: number }[]>} - A promise that resolves to an array of metadata objects.
 */
export async function getMetadataBlogs(
  limit = 10,
  page = 1,
  sort: TBlogSort,
  sortBy: TBlogSortBy
): Promise<{ slug: string; views: number; likes: number }[]> {
  try {
    const supabase = await createClient();

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from('blogs')
      .select('slug, views, likes')
      .order(sortBy, { ascending: sort === 'asc' })
      .range(from, to);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMetadataBlogsBySlugs(
  slugs: string[]
): Promise<{ slug: string; views: number; likes: number }[]> {
  if (slugs.length === 0) {
    return [];
  }

  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('blogs')
      .select('slug, views, likes')
      .in('slug', slugs);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}

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
