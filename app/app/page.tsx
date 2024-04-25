import Button from "@/components/Button";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App | BoookWisePick",
};


const App = async () => {

  const response = await fetch(`http://openlibrary.org/subjects/fiction.json?sort=rating asc`)
  const bookData = await response.json()

  const financeResponse = await fetch('https://openlibrary.org/subjects/finance.json?sort=rating asc')
  const financeBookData = await financeResponse.json()

  const nonFictionResponse = await fetch('https://openlibrary.org/subjects/non-fiction.json?sort=rating asc')
  const nonFictionData = await nonFictionResponse.json()

  return (
    <div className="px-80">
      <div className="flex justify-evenly items-center">
        <h2>Reccomended For You!</h2>

        <Link href="/app/search" data-cy="search-link">
          <Button styleType="outline" className="w-96 rounded-md">
            Search Book!
          </Button>
        </Link>
      </div>
      <p className="mt-8">Like some books you like</p>

      {/* Categories */}
      <div className="mt-8">

        {/* Fiction */}
        <div data-cy="fiction-category">
          <h3>Fiction</h3>
          <hr className="border-black" />
          <div className="flex gap-8 overflow-x-auto">
            {bookData && bookData.works.map((work: any) => {
              return (
                <div key={work.key} className="min-w-40 flex flex-col justify-evenly items-center gap-4">
                  <p className="font-semibold">{work.title}</p>
                  <Image src={`https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`} alt="book-cover" width={200} height={400} />
                  <p>By {work.authors?.[0]?.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Non Fiction*/}
        <div data-cy="non-fiction-category">
          <h3>Non-Fiction</h3>
          <hr className="border-black" />
          <div className="flex gap-8 overflow-x-auto">
            {nonFictionData && nonFictionData.works.map((work: any) => {
              return (
                <div key={work.key} className="min-w-40 flex flex-col justify-evenly items-center gap-4">
                  <p className="font-semibold">{work.title}</p>
                  <Image src={`https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`} alt="book-cover" width={200} height={400} />
                  <p>By {work.authors?.[0]?.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/*Finance */}
        <div data-cy="finance-category">
          <h3>Finance</h3>
          <hr className="border-black" />
          <div className="flex gap-8 overflow-x-auto">
            {financeBookData && financeBookData.works.map((work: any) => {
              return (
                <div key={work.key} className="min-w-40 flex flex-col justify-evenly items-center gap-4">
                  <p className="font-semibold">{work.title}</p>
                  <Image src={`https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`} alt="book-cover" width={200} height={400} />
                  <p>By {work.authors?.[0]?.name}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

