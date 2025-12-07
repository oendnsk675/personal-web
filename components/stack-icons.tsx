import { JSX } from 'react';
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';

export const stackIcons: Record<string, JSX.Element> = {
  'Next.js': <SiNextdotjs />,
  'Vue.js': <SiVuedotjs />,
  ExpressJS: <SiExpress />,
  NestJS: <SiNestjs />,
  TailwindCSS: <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
};
