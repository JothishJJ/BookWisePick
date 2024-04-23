import { redirect } from "next/navigation"
import { auth } from "../app"

const App = async () => {
  const session = await auth()

  if (session?.user) return (
    <div className="px-80">
      <h2>Reccomended For You!</h2>
      <p>Please like some books to figure out your books</p>
    </div>
  )
  else {
    redirect("/login")
  }
}

export default App

