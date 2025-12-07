import {
  Bolt,
  Book,
  Folder,
  House,
  MonitorCog,
  Moon,
  Sun,
  TerminalIcon,
} from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

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
];

export default function Header() {
  return (
    <header className="fixed flex justify-center w-full left-0 bottom-4 md:top-4 z-50 h-fit">
      <ul className="flex items-center justify-between md:justify-start w-full mx-4 md:w-fit gap-4 md:mx-auto h-16 rounded-lg bg-gray-50/10 px-4 dark:bg-neutral-500/10 backdrop-blur border">
        <Link
          href={'/'}
          className="hover:opacity-75 cursor-custom transition-all duration-150 hidden md:block"
        >
          <div className="flex justify-center items-center relative aspect-square rounded-lg bg-linear-30 from-emerald-800/30 via-emerald-500/30 to-emerald-800/20 border border-emerald-800 w-10 h-10">
            <h1 className="font-extrabold text-2xl">S</h1>
          </div>
        </Link>
        <div className="h-full py-2 mx-1 hidden md:block">
          <hr className="h-full border opacity-70" />
        </div>
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="flex justify-center items-center relative aspect-square rounded-lg bg-gray-200 dark:bg-neutral-800 w-10 h-10 hover:opacity-75 transition-all duration-150 cursor-custom gap-2"
            >
              {link.icon}
            </Link>
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
