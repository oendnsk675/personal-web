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
  SiSharp,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';

export const stackIcons: Record<string, JSX.Element> = {
  'Next.js': <SiNextdotjs aria-label="Next.js" />,
  'Vue.js': <SiVuedotjs aria-label="Vue.js" />,
  ExpressJS: <SiExpress aria-label="ExpressJS" />,
  NestJS: <SiNestjs aria-label="NestJS" />,
  TailwindCSS: <SiTailwindcss aria-label="TailwindCSS" />,
  MongoDB: <SiMongodb aria-label="MongoDB" />,
  PostgreSQL: <SiPostgresql aria-label="PostgreSQL" />,
  Bootstrap: <SiBootstrap aria-label="Bootstrap" />,
  EJS: <SiEjs aria-label="EJS" />,
  Prisma: <SiPrisma aria-label="Prisma" />,
  FFmpeg: <SiFfmpeg aria-label="FFmpeg" />,
  Sharp: <SiSharp aria-label="Sharp" />,
};
