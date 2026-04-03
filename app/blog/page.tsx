import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="flex justify-center">
      <Link href="/" className="text-neutral-500 hover:text-white">← Home</Link>

      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="space-y-3">
        <Post title="What I learned building a game" date="Apr 2026" />
        <Post title="Why most ideas fail" date="Mar 2026" />
      </div>
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
