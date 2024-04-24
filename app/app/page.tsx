import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App | BoookWisePick",
};


const App = async () => {

  return (
    <div className="px-80">
      <h2>Reccomended For You!</h2>
      <p>Please like some books to figure out your books</p>
      {/* TODO: Add a search bar to this page */}
    </div>
  )
}

export default App

