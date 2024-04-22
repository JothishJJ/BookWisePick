import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1>Find the right book to Read!</h1>
        <br />
        <Link href="/app">
          <button className="p-2 border-black border-2 bg-black text-white rounded-lg">Explore the Books!</button>
        </Link>
      </section>
    </main>
  );
}
