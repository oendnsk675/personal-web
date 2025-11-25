create or replace function update_blog_like(
  slug_input text,
  value integer
)
returns integer
language plpgsql
as $$
declare
  new_likes integer;
begin
  -- Upsert jika belum ada
  insert into blogs (slug, likes)
  values (slug_input, greatest(value, 0))
  on conflict (slug)
  do update set
    likes = greatest(blogs.likes + value, 0)
  returning likes into new_likes;

  return new_likes;
end;
$$;
