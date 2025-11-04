import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed flex justify-center w-full left-0 top-4">
      <nav className="w-full xl:w-fit flex items-center bg-slate-500/5 justify-center gap-8 px-6 p-3 border rounded">
        <div className="flex items-center">
          <div className="flex gap-1 items-center">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={16}
              height={16}
              className="mr-2"
            />
            <h1 className="text-lg font-bold">OsLab</h1>
          </div>
        </div>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Notes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
