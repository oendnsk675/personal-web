export async function getBlogBySlug(slug: string) {
    return supabaseServer()
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();
  }
  