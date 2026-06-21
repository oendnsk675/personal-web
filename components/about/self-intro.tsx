"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { FaGolang } from 'react-icons/fa6';
import { SiExpress, SiNestjs, SiNextdotjs, SiVuedotjs } from 'react-icons/si';
import { ElysiaDark } from '../icons/elysia';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { PhotoCard } from './photo-card';

const skils = [
  {
    title: 'Next.js',
    description:
      'My go-to framework for building React applications that feel complete, scalable, and ready for production.',
    icon: <SiNextdotjs className="size-6 text-white" />,
    iconSm: <SiNextdotjs className="size-4 text-white" />,
    link: 'https://nextjs.org/',
  },
  {
    title: 'Vue.js',
    description:
      'I enjoy its clarity and ergonomics, it lets me focus on ideas without fighting the framework.',
    icon: <SiVuedotjs className="size-6 text-white" />,
    iconSm: <SiVuedotjs className="size-4 text-white" />,
    link: 'https://vuejs.org/',
  },
  {
    title: 'Elysia.js',
    description:
      'A refreshingly minimal framework that feels fast, modern, and thoughtfully designed.',
    icon: <ElysiaDark className="size-6" />,
    iconSm: <ElysiaDark className="size-4" />,
    link: 'https://elysiajs.com/',
  },
  {
    title: 'Golang',
    description:
      'I value its simplicity and predictability when building systems meant to last and scale.',
    icon: <FaGolang className="size-6 text-white" />,
    iconSm: <FaGolang className="size-4 text-white" />,
    link: 'https://go.dev/',
  },
  {
    title: 'Express.js',
    description:
      'Still my choice when I want full control and a backend that stays out of my way.',
    icon: <SiExpress className="size-6 text-white" />,
    iconSm: <SiExpress className="size-4 text-white" />,
    link: 'https://expressjs.com/',
  },
  {
    title: 'Nest.js',
    description:
      'I use it when structure, consistency, and long-term maintainability truly matter.',
    icon: <SiNestjs className="size-6 text-white" />,
    iconSm: <SiNestjs className="size-4 text-white" />,
    link: 'https://nestjs.com/',
  },
];

export default function SelfIntro() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 mb-44">
      {/* photo card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full md:w-2/5 flex justify-center md:justify-start -mt-10"
      >
        <PhotoCard />
      </motion.div>

      {/* description */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full md:flex-1"
      >
        <h1 className="text-3xl font-bold mb-2">Sayidina Ahmadal Qososyi</h1>
        <div className="flex gap-2 text-muted-foreground mb-6">
          <span>Full-stack Web Developer at</span>
          <Link
            href="https://www.linkedin.com/company/pt-kawan-sehat-indonesia/"
            className="underline"
          >
            Kawan Sehat Indonesia
          </Link>
        </div>
        <div className="text-pretty text-muted-foreground flex flex-col gap-4 mb-6">
          <p>
            Hello, you can call me Cozy. I&apos;m a software engineer working
            within the React ecosystem. I care deeply about building software
            with intention, treating code as a craft, not just a tool. Through
            writing, I try to help others rebuild their understanding of
            fundamentals and see them through clearer mental models.
          </p>
          <p>
            I was born in 2000 in East Lombok, Indonesia. I began learning
            programming in my second year of high school. At first, it was about
            HTML and CSS, learning how things are structured, how small details
            matter. That foundation slowly shaped how I think about building
            software: patiently, deliberately, and with respect for the process.
          </p>
          <p>
            Writing became part of my learning practice. I use it to slow down,
            reflect, and refine my understanding. What started as personal notes
            eventually turned into articles shared here. If these writings help
            you think more clearly, or build with more care, then they&apos;ve
            done their job.
          </p>
        </div>

        <div className="text-pretty text-muted-foreground flex flex-col gap-4">
          <p>
            I am also a full-stack engineer, here are my current favorite tech
            stack:
          </p>
          <div className="flex items-center gap-4">
            {skils.map((skill) => (
              <Tooltip key={skill.title}>
                <TooltipTrigger asChild>
                  <div className="rounded-lg border p-2">{skill.icon}</div>
                </TooltipTrigger>
                <TooltipContent className="w-72 py-3">
                  <div className="mb-2 flex items-center gap-2">
                    {skill.iconSm}
                    <Link href={skill.link || '#'} className="underline">
                      {skill.title}
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    {skill.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
