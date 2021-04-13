import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <div className="pt-6">
            <div className="flex justify-between space-x-4">
                <Link to="/">
                    <div className="text-sm font-semibold">minminoo</div>
                </Link>
                <div className="flex space-x-4">
                    <Link to="/blog">
                        <div className="uline hover:animate-uline text-sm font-semibold">Blog</div>
                    </Link>
                    <Link to="/about">
                        <div className="uline hover:animate-uline text-sm font-semibold">About</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

// export const imageQuery = graphql`

// `