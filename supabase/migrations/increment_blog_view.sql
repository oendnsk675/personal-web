create or replace function increment_blog_view(slug_input text)
returns bigint AS $$
declare
  current_views bigint;
begin
  insert into blogs (slug, views)
  values (slug_input, 1)
  on conflict (slug) do update
    set views = blogs.views + 1;

  select views into current_views
  from blogs
  where slug = slug_input;

  return current_views;
end;
$$ language plpgsql;
