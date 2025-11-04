import Header from '@/components/header';

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="">
        <section className="w-full h-screen flex justify-between items-center">
          <div className="p-1 px-3 bg-linear-to-r from-cyan-500 to-blue-500">
            <span className=''></span>
            <span>Open to work</span>
          </div>
        </section>
      </main>
    </div>
  );
}
