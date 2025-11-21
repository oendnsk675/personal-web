import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Helper slugify untuk bikin id heading
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

export interface TocItem {
  level: number; // tingkat heading: 1..6
  text: string; // isi heading
  id: string; // anchor id
}

const getTableOfContents = (folder: string, slug: string): TocItem[] => {
  const file = path.join(folder, slug);
  const raw = fs.readFileSync(`${file}.md`, 'utf8');

  // Ambil hanya content markdownnya
  const { content } = matter(raw);

  const toc: TocItem[] = [];

  // Regex: match heading markdown (#, ##, ###, ...)
  const regex = /^(#{1,6})\s+(.*)$/gm;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const [full, hashes, title] = match;

    toc.push({
      level: hashes.length,
      text: title.trim(),
      id: slugify(title),
    });
  }

  return toc;
};

export default getTableOfContents;
