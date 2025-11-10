import { Book, BriefcaseBusiness, House, TerminalIcon } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';

export default function Header() {
  const links = [
    {
      title: 'Home',
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Blogs',
      icon: (
        <TerminalIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Projects',
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Notes',
      icon: (
        <Book className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
  ];

  return (
    <header className="fixed flex justify-center w-full left-0 bottom-4 md:top-4 z-50 h-fit">
      <FloatingDock desktopClassName="" items={links} />
    </header>
  );
}
