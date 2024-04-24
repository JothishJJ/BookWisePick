"use client"
import Button from "@/components/Button"
import { useState } from "react"

const Search = () => {

  const [books, setBooks] = useState<any>()

  async function getBooks(e: any) {
    e.preventDefault()

    const response = await fetch(`https://openlibrary.org/search.json?q=${bookTitle}&limit=20`)
    const obj = await response.json()
    setBooks(obj)
  }

  const [bookTitle, setBookTitle] = useState("")

  return (
    <div className="text-center">
      <form className="fixed top-20 right-0 left-0 space-x-8" >
        <input
          data-cy="search-bar"
          type="search"
          name="search"
          placeholder="Search a Book"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          className="border-2 border-black p-2 rounded-xl outline-none w-96"
        />
        <Button data-cy="search" className="px-4" onClick={getBooks}>Search</Button>
      </form>

      <div className="pt-16 lg:px-80 px-4">
        {books && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {books.docs.map((book: any, i: any) => {
              return (
                <div key={i} className="border-2 border-black rounded-xl" data-cy="book-card">
                  <p className="font-semibold">{JSON.stringify(book.title)}</p>
                  <p>By {JSON.stringify(book.author_name?.[0] ?? "No Author found")}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search;
