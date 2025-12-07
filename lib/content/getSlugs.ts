import fs from 'fs';
import path from 'path';
import { BASE_DIR } from '../constants';

const getSlugs = (folder: string) => {
  const folderPath = path.join(BASE_DIR, folder);
  const files = fs.readdirSync(folderPath);
  const filesFiltered = files.filter((file) => file.endsWith('.md'));
  return filesFiltered.map((file) => file.replace('.md', ''));
};

export default getSlugs;
