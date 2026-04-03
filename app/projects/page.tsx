import Link from "next/link";

export default function ProjectsPage() {
  return (
        <main className="flex justify-center py-30 px-10">

      <Link href="/" className="text-neutral-500 hover:text-white">← Home</Link>

      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="space-y-4">
        <Project
          title="Puzzle Game"
          desc="A mechanics-heavy puzzle game built with Godot."
        />
        <Project
          title="SideHustl"
          desc="A student marketplace for services and gigs."
        />
      </div>
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

