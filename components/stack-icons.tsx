import { JSX } from 'react';
import {
  SiBootstrap,
  SiEjs,
  SiExpress,
  SiFfmpeg,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
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
  Bootstrap: <SiBootstrap />,
  EJS: <SiEjs />,
  Prisma: <SiPrisma />,
  FFmpeg: <SiFfmpeg />,
};
