import Link from "next/link";

export default function AboutPage() {
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
        
      <h1 className="text-3xl font-bold">About me</h1>
      <p>will be updated soon hehe</p>

      </section>
    </main>
  );
}

