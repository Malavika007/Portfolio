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
          💬 she/her | 📍India, IN | 💼 Student
        </p>
        <br/>
      </section>



      {/* About */}
      <section>
        <h1 className="text-2xl font-semibold mb-3">Hi, I'm Malavika</h1>
        <p className="leading-relaxed max-w-xl font-sans">
          I'm an engineering student. Apart from programming, I like to play chess and read.
        </p>
      </section>


      {/* Navigation */}
      <section className="flex gap-10">
        <Link href="/projects" className="hover:text-blue-800 border-1 p-1">Projects</Link>
        <Link href="/blog" className="hover:text-blue-800 border-1 p-1">Articles</Link>
        <Link href="/blog" className="hover:text-blue-800 border-1 p-1">About Me</Link>

      </section>
      <br/>
      <hr/>
      <br/>

      {/* more info */}
      <section>
        <h1 className="text-2xl font-semibold mb-3">What I'm working on rn</h1>
        <ul className="leading-relaxed max-w-xl font-sans list-disc">
          <li>I'm learning rust !</li>
          <li>Also trying my luck with some game dev in godot</li>
        </ul>
           <br/>
      <hr/>
      <br/>

      </section>

      {/* get in touch */}
      <section>
        <h1 className="text-2xl font-semibold mb-3">Get in touch</h1>
        <ul className="leading-relaxed max-w-xl font-sans list-disc">
          <li><a className="text-blue-600" href="https://www.linkedin.com/in/malavika-g-9aa515374/">LinkedIn</a></li>
          <li><a className="text-blue-600" href="https://github.com/Malavika007">Github</a></li>
          <li><a className="text-blue-600" href="mailto:malavikagmalu@gmail.com">malavikagmalu@gmail.com</a></li>

        </ul>
      </section>

      </section>
    </main>
  );
}

