import Link from "next/link";

export default function ProjectsPage() {
  return (
        <main className="flex justify-center py-30 px-10">
        <section>

        <header className="flex ">

        <Link href="/" className="text-neutral-500 hover:text-black mr-5">
        <img src={"/mg.png"} className="w-5"/>
        </Link>

        <Link href="/blog" className="text-neutral-500 hover:text-black mr-5">
        Articles
        </Link>

        <Link href="/about" className="text-neutral-500 hover:text-black">
        About
        </Link>

        </header>
        <br/>
        
      <h1 className="text-3xl font-bold">Projects</h1>
      <p>Projects I've done along the way</p>
      <div className="space-y-4">
        <Project
          title="Discord Bot"
          desc="A simple discord bot made with python. You can play a little guessing game with it and ask questions. Uses Groq API."
          link="https://github.com/Malavika007/discord_bot"
        />
        
      </div>
      </section>
    </main>
  );
}

function Project({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <div className="border border-black rounded-2xl p-5 mt-10 bg-blue-200 hover:bg-blue-300 font-mono">
      <h3 className="font-semibold text-lg font-mono">{title}</h3>
      <p className="text-black text-sm mt-1 font-serif">{desc}</p>
      <a href={link}>View project →</a>
    </div>
  );
}

