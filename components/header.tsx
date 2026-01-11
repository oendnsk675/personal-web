import {
  Bolt,
  Book,
  Folder,
  House,
  MonitorCog,
  Moon,
  Sun,
  TerminalIcon,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const links = [
  {
    title: 'Home',
    icon: (
      <House width={20} className="text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/',
  },

  {
    title: 'Blogs',
    icon: (
      <TerminalIcon
        width={20}
        className="text-neutral-500 dark:text-neutral-300"
      />
    ),
    href: '/blogs',
  },
  {
    title: 'Projects',
    icon: (
      <Folder width={20} className="text-neutral-500 dark:text-neutral-300" />
      // <BriefcaseBusiness
      //   width={20}
      //   className="text-neutral-500 dark:text-neutral-300"
      // />
    ),
    href: '/projects',
  },
  {
    title: 'Notes',
    icon: (
      <Book width={20} className="text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/notes',
  },
  {
    title: 'About',
    icon: (
      <User width={20} className="text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/about',
  },
];

export default function Header() {
  return (
    <header className="fixed flex justify-center w-full left-0 bottom-4 md:top-4 z-50 h-fit">
      <ul className="flex items-center justify-between md:justify-start w-fit mx-4 md:w-fit gap-4 md:mx-auto h-16 rounded-lg bg-gray-50/10 px-4 dark:bg-neutral-500/10 backdrop-blur border">
        <Link
          href={'/'}
          className="hover:opacity-75 cursor-custom transition-all duration-150 hidden"
        >
          <Image src="/icons/logo-b.svg" alt="logo" width={40} height={40} />
        </Link>
        <div className="h-full py-2 mx-1 hidden">
          <hr className="h-full border opacity-70" />
        </div>
        {links.map((link) => (
          <li key={link.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className="flex justify-center items-center relative aspect-square rounded-lg bg-gray-200 dark:bg-neutral-800/40 xl:dark:bg-neutral-800 w-10 h-10 hover:opacity-75 transition-all duration-150 cursor-custom gap-2"
                >
                  {link.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
        <div className="h-full py-2 mx-1 hidden">
          <hr className="h-full border opacity-70" />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild className="hidden">
            <button className="flex justify-center items-center relative aspect-square rounded-lg bg-gray-200 dark:bg-neutral-800 w-10 h-10 cursor-custom hover:opacity-75 transition-all duration-150">
              <Bolt
                width={20}
                className="text-neutral-500 dark:text-neutral-300"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={20} className="w-32" align="end">
            <DropdownMenuItem>
              <Sun />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Moon />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MonitorCog />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </header>
  );
}
