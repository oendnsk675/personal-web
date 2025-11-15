import {
  Bolt,
  Book,
  BriefcaseBusiness,
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

export default function Header() {
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
        <BriefcaseBusiness
          width={20}
          className="text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: '#',
    },
    {
      title: 'Notes',
      icon: (
        <Book width={20} className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];

  return (
    <header className="fixed flex justify-center w-full left-0 bottom-4 md:top-4 z-50 h-fit">
      <ul className="flex items-center gap-4 mx-auto h-16 rounded-xl bg-gray-50/10 px-4 dark:bg-neutral-500/10 backdrop-blur border">
        <Link
          href={'/'}
          className="hover:opacity-75 cursor-custom transition-all duration-150"
        >
          <div className="flex justify-center items-center relative aspect-square rounded-xl bg-linear-30 from-emerald-800/30 via-emerald-500/30 to-emerald-800/20 border border-emerald-800 w-10 h-10">
            <h1 className="font-extrabold text-2xl">S</h1>
          </div>
        </Link>
        <div className="h-full py-2 mx-1">
          <hr className="h-full border opacity-70" />
        </div>
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="flex justify-center items-center relative aspect-square rounded-xl bg-gray-200 dark:bg-neutral-800 w-10 h-10 hover:opacity-75 transition-all duration-150 cursor-custom gap-2"
            >
              {link.icon}
            </Link>
          </li>
        ))}
        <div className="h-full py-2 mx-1">
          <hr className="h-full border opacity-70" />
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="flex justify-center items-center relative aspect-square rounded-xl bg-gray-200 dark:bg-neutral-800 w-10 h-10 cursor-custom hover:opacity-75 transition-all duration-150">
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
