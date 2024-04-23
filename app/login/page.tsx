import Button from "@/components/Button"

const SignIn = async () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-80 items-center justify-center min-h-screen">
      <form className="flex flex-col gap-8">
        <Button className="w-96">Sign In With Google</Button>
        <Button className="w-96">Sign In With GitHub</Button>
      </form>

      <div className="text-center">
        <p>Login To get choose your next Book!</p>
      </div>
    </div>
  )
}

export default SignIn

