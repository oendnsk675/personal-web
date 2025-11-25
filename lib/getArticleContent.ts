import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import getDateFormat from './getDateFormat';

const getArticleContent = (folder: string, slug: string) => {
  const file = path.join(folder, slug);
  const content = fs.readFileSync(`${file}.md`, 'utf8');
  const matterResult = matter(content);
  matterResult.data.date = getDateFormat(matterResult.data.date);
  return matterResult;
};

export default getArticleContent;
