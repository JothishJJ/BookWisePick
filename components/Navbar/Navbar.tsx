import Link from "next/link"
import Button from "../Button"

const Navbar = () => {

    return (
        <nav className="lg:px-80 py-4 flex justify-between items-center">
            <div>
                <Link href="/" data-cy="home-link">
                    <h3>BookWisePick</h3>
                </Link>
            </div>

            <ul className="flex items-center gap-5">
                <li>
                    <Link href="/#about-us" data-cy="about-us-link">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/app">
                        <Button className="p-1">
                            Go to App
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar
