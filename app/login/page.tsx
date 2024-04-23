import { auth } from "@/auth"
import Button from "@/components/Button"
import { signIn } from "@/auth"
import { redirect } from "next/navigation"

const SignIn = async () => {

  const session = await auth()

  if (!session?.user)
    return (
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-80 items-center justify-center min-h-screen">
        <form className="flex flex-col gap-8">
          <Button className="w-96" formAction={async () => {
            "use server"
            await signIn("google")
          }}>Sign In With Google</Button>
          <Button className="w-96" formAction={async () => {
            "use server"
            await signIn("github")
          }}>Sign In With GitHub</Button>
        </form>

        <div className="text-center">
          <p>Login To get choose your next Book!</p>
        </div>
      </div>
    )
  else redirect("/app")
}

export default SignIn

