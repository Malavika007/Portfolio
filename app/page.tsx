// 📁 app/page.tsx (UPDATED with navigation)
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center py-30 px-10">
      <section>
      {/* Hero */}
      <img src={"/mg.png"} className="w-30"/>
      <br/>
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Malavika G</h1>
        <p className=" max-w-xl font-mono">
          💬 she/her ⋮ 📍India, IN ⋮ 💼 Student
        </p>
        <br/>
      </section>



      {/* About */}
      <section>
        <h1 className="text-2xl font-normal mb-3">Hi, I'm Malavika</h1>
        <p className="leading-relaxed max-w-xl">
          Currently exploring game development with Godot and building projects like SideHustl.
          I like solving problems, experimenting with ideas, and shipping things fast.
        </p>
      </section>


      {/* Navigation */}
      <section className="flex gap-6">
        <Link href="/projects" className="hover:text-white">Projects →</Link>
        <Link href="/blog" className="">Blog →</Link>
      </section>


      </section>
    </main>
  );
}

