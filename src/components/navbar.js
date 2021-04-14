import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <div className="pt-6">
            <div className="flex justify-between space-x-4">
                <Link to="/">
                    <div className="text-sm font-semibold hover:text-blue-900">minminoo</div>
                </Link>
                <div className="flex space-x-4">
                    <Link to="/blog">
                        <div className="uline hover:animate-uline hover:text-blue-900 text-sm font-semibold">Blog</div>
                    </Link>
                    <Link to="/about">
                        <div className="uline hover:animate-uline hover:text-blue-900 text-sm font-semibold">About</div>
                    </Link>
                    <svg className="pt-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                </div>
            </div>
            <hr className="my-6 border-gray-700" />
        </div>
    )
}

export default Navbar