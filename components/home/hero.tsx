'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import Image from 'next/image';

import bsky from '@/public/icons/bsky.svg';
import dailyDev from '@/public/icons/daily-dev.svg';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import GlassButton from '../ui/glass-button';
import HeroGridReveal from './hero-grid-reveal';

const socialContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.1,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: {
    opacity: 0.6,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-20 mx-1">
      <div className="col-span-1 flex flex-col justify-center gap-8">
        <motion.div 
        initial={{ opacity: 0, x: 16 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-fit h-fit p-1.5 rounded-l-3xl bg-linear-to-r from-emerald-700/50 to-transparent">
          <div className="p-1 px-3 rounded-l-[16.42px] bg-linear-to-r from-emerald-700/50 to-transparent text-xs xl:text-sm flex items-center pr-16 ">
            <span className="w-2 h-2 rounded-full bg-emerald-300 mr-2"></span>
            <span>Open to work</span>
          </div>
        </motion.div>

        <div className="max-w-120 grid gap-8">
          <div className="grid gap-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-5xl 2xl:text-7xl font-bold"
            >
              {"I\'m"} Cozy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-pretty text-muted-foreground"
            >
              I build software the way a craftsman shapes stone—
              <br />
              slow, deliberate, and with respect for every cut.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex gap-4"
          >
            <GlassButton
              href="/blogs"
              icon={<ArrowDown className="size-[70%]" strokeWidth={1.3} />}
            >
              Read my blogs
            </GlassButton>
            <GlassButton href="/blogs" variant="white">
              More about me
            </GlassButton>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={socialContainerVariants}
            className="flex items-center gap-4"
          >
            <motion.a
              variants={socialItemVariants}
              whileHover={{ opacity: 0.75, y: -2 }}
              href="https://github.com/oendnsk675"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="cursor-custom"
            >
              <Github size={20} strokeWidth={1} />
            </motion.a>
            <motion.a
              variants={socialItemVariants}
              whileHover={{ opacity: 0.75, y: -2 }}
              href="https://app.daily.dev/sayidinaahmadalqososyi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daily.dev profile"
              className="cursor-custom"
            >
              <Image src={dailyDev} alt="Logo Daily Dev" />
            </motion.a>
            <motion.a
              variants={socialItemVariants}
              whileHover={{ opacity: 0.75, y: -2 }}
              href="https://bsky.app/profile/oslab19.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bluesky profile"
              className="cursor-custom"
            >
              <Image src={bsky} alt="Logo Bsky" />
            </motion.a>
            <motion.a
              variants={socialItemVariants}
              whileHover={{ opacity: 0.75, y: -2 }}
              href="https://www.instagram.com/oslab19/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="cursor-custom"
            >
              <Instagram size={20} strokeWidth={1} />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <HeroGridReveal />
    </section>
  );
}
