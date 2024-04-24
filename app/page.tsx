import Link from "next/link"

export default function Home() {
  return (
    <main className="mb-8">
      <section id="hero-section" className="flex flex-col gap-4 items-center justify-center h-screen">
        <h1>Find the right book to Read!</h1>
        <br />
        <Link href="/app">
          <button className="p-2 border-black border-2 bg-black text-white rounded-lg">Explore the Books!</button>
        </Link>
      </section>
      <section data-cy="aboutus-section" className="lg:px-80 px-4">
        <h2 className="pb-8">About Us</h2>
        <p>Hi, I'm JothishJJ, the creator of this project <br />
          I'm the head team at JJ Enterprice NARC (Not A Real Company). At JJ Enterprice we are passionate about being there for you, when choosing to read your book, infact we're so commited to providing the best solution for you we even made a system where you can like the Books, well you like. Anyway hope you guys have a blast. <br />
          Have a great day.
        </p>
      </section>
    </main>
  );
}
