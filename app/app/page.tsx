import { auth } from "../app"
import { signIn, signOut } from "@/auth"

const App = async () => {

  const session = await auth()

  if (!session?.user) return (
    <div>
      <h2>Reccomended For You!</h2>
      <p>Please like some books to figure out your books</p>
      <br />
      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  )

  return (
    <div>
      <h2>You're signed in!</h2>
      <p>Hello, there {session.user.name}</p>
      <br />
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign Out</button>
      </form>    </div>
  )
}

export default App

