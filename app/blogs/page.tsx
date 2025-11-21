import HeaderLight from '@/components/blog/header-light';
import CardBlog from '@/components/card-blog';
import Fancytext from '@/components/fancy-text';
import NewsletterPattern from '@/components/pattern/newsletter-pattern';
import RichSelect from '@/components/rich-select';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import getArticleMetadata from '@/lib/getArticleMetadata';
import { ArrowRight, Calendar, Eye, TerminalIcon } from 'lucide-react';
import Link from 'next/link';

const sortOptions = [
  {
    value: 'views',
    label: 'Sort by views',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    value: 'dates',
    label: 'Sort by date',
    icon: <Calendar className="h-4 w-4" />,
  },
];

export default function Blog() {
  const articleMetadata = getArticleMetadata('articles');
  const sortedArticles = articleMetadata.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* HEADER BLOG */}
      <div className="w-full relative flex flex-col items-center gap-4 px-4 md:px-0 pt-32 pb-6 md:pb-20 border-b">
        <HeaderLight />

        <div className="rounded-lg border bg-neutral-900 p-2 relative z-20">
          <TerminalIcon
            width={28}
            className="text-neutral-500 dark:text-neutral-300"
          />
        </div>
        <Fancytext
          className="text-4xl md:text-6xl relative z-20"
          firstWord="The"
          secondWord="Blog"
        />
        <p className="text-center mb-2 relative z-20 bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 bg-clip-text text-transparent">
          Thoughts, mental models, and tutorials about front-end development.
        </p>
      </div>

      {/* content */}
      <main className="xl:max-w-6xl px-4 lg:px-0 relative min-h-[150vh] flex flex-col-reverse md:flex-row gap-4 md:gap-0 md:items-start">
        {/* left */}
        <section className="w-full md:w-3/4 min-h-[150vh] pb-6 md:pr-6 md:border-r">
          {sortedArticles.map((item, index) => (
            <CardBlog content={item} key={index} />
          ))}
          {/* paggination */}
          <div className="flex justify-center mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        {/* right */}
        <section className="block md:sticky left-0 top-8 md:mb-16 w-full md:flex-1 md:pb-6 md:pt-6 md:pl-6">
          <RichSelect
            options={sortOptions}
            placeholder="Sort by"
            className="mb-8"
          />

          <div className="mb-8">
            <h4 className="font-semibold mb-4">Choose topics</h4>
            <div className="flex items-center flex-wrap gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="p-1 px-2 bg-white/5 rounded-xl text-sm cursor-custom"
                >
                  Topic {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="font-semibold mb-4">Read in other language?</h4>
            <div className="flex items-center flex-wrap gap-1">
              <Link
                href="#"
                className="text-sm cursor-custom border-b border-slate-50/20 pb-1 opacity-75 hover:opacity-100 transition-all duration-150"
              >
                Read in Bahasa Indonesia
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* news latter card */}
      <div className="xl:w-6xl mx-4 relative flex flex-col-reverse gap-8 md:flex-row items-center justify-between rounded-3xl bg-linear-to-br from-emerald-700/20 via-emerald-200/10 via-15% to-transparent overflow-hidden p-6 md:p-12 mb-16">
        <NewsletterPattern />

        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Join to the newsletter list</h4>
          <p className="text-sm mb-4">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <Button variant="default" className="w-fit">
            <span>Subscribe Now</span>
            <ArrowRight />
          </Button>
        </div>

        <div className="isolate flex flex-col md:*:min-w-[22rem]">
          <div
            className="rounded-[1.25rem] p-3 bg-neutral-300 flex items-center gap-3 max-w-[22rem] z-30 relative"
            style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
          >
            <div className="flex items-center bg-neutral-950 rounded-xl p-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail text-neutral-100"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="grow">
              <div className="flex items-center justify-between gap-2">
                <p className="s2 text-neutral-950">New Blog Post</p>
                <p className="c1 text-neutral-700">20m ago</p>
              </div>
              <p className="c1 text-neutral-700">
                Mastering Gradient Borders in CSS 🌈✨
              </p>
            </div>
          </div>
          <div
            className="rounded-[1.25rem] p-3 bg-neutral-300 flex items-center gap-3 max-w-[22rem] -mt-7 z-20 relative brightness-[85%]"
            style={{
              opacity: 1,
              transform:
                'translateY(0px) scale(0.9) rotate(-1deg) translateZ(0px)',
            }}
          >
            <div className="flex items-center bg-neutral-950 rounded-xl p-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-podcast text-neutral-100"
              >
                <path d="M16.85 18.58a9 9 0 1 0-9.7 0"></path>
                <path d="M8 14a5 5 0 1 1 8 0"></path>
                <circle cx="12" cy="11" r="1"></circle>
                <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between gap-2">
                <p className="s2 text-neutral-950">A talk is happening</p>
                <p className="c1 text-neutral-700">2h ago</p>
              </div>
              <p className="c1 text-neutral-700">
                Sharing My 2023 Retrospective
              </p>
            </div>
          </div>
          <div
            className="rounded-[1.25rem] p-3 bg-neutral-300 flex items-center gap-3 max-w-[22rem] -mt-10 z-10 relative brightness-[70%]"
            style={{
              opacity: 1,
              transform:
                'translateY(0px) scale(0.78) rotate(1deg) translateZ(0px)',
            }}
          >
            <div className="flex items-center bg-neutral-950 rounded-xl p-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-flame text-neutral-100"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
            </div>
            <div className="grow">
              <div className="flex items-center justify-between gap-2">
                <p className="s2 text-neutral-950">New Blog Post</p>
                <p className="c1 text-neutral-700">4h ago</p>
              </div>
              <p className="c1 text-neutral-700">and many more!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
