import fs from 'fs';
import matter from 'gray-matter';
import { truncateText } from './utils';

const getArticleMetadata = (basePath: string) => {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownArticles = files.filter((file) => file.endsWith('.md'));

  const articles = markdownArticles.map((filename: string) => {
    const articleContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(articleContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: truncateText(matterResult.data.description, 100),
      thumbnail: matterResult.data.thumbnail,
      slug: filename.replace('.md', ''),
      categories: matterResult.data.categories,
      content: matterResult.content,
    };
  });
  return articles;
};

export default getArticleMetadata;
