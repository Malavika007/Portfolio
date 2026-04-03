import Link from "next/link";

export default function BlogPage() {
  return (
        <main className="flex justify-center py-30 px-10">
          <section>

          <header className="flex ">

          <Link href="/" className="text-neutral-500 hover:text-black mr-5">
          <img src={"/mg.png"} className="w-5"/>
          </Link>

          <Link href="/projects" className="text-neutral-500 hover:text-black mr-5">
          Projects
          </Link>

          <Link href="/about" className="text-neutral-500 hover:text-black">
          About
          </Link>

          </header>
          <br/>

      <h1 className="text-3xl font-bold">Articles</h1>
      <p>Stuff that I find interesting enough to write about</p>


      <div className="space-y-3">
        {/* <Post title="What I learned building a game" date="Apr 2026" />
        <Post title="Why most ideas fail" date="Mar 2026" /> */}
      </div>
      </section>
    </main>
  );
}

function Post({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex justify-between text-neutral-400 text-sm border-b border-neutral-900 pb-1">
      <span className="hover:text-white cursor-pointer">{title}</span>
      <span>{date}</span>
    </div>
  );
}
