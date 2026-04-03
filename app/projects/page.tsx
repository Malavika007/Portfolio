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
        {/* <Project
          title="Puzzle Game"
          desc="A mechanics-heavy puzzle game built with Godot."
        />
        <Project
          title="SideHustl"
          desc="A student marketplace for services and gigs."
        /> */}
      </div>
      </section>
    </main>
  );
}

function Project({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-neutral-800 rounded-2xl p-5">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-neutral-400 text-sm mt-1">{desc}</p>
    </div>
  );
}

