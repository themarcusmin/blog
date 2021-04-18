import React, { useContext } from "react"
import { Link } from "gatsby"

import { ThemeContext } from "../context/themeContext"

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleThemeToggle = () => {
        if (theme === "light") {
            document.documentElement.classList.add('dark')
            setTheme("dark")
        } else {
            document.documentElement.classList.remove('dark')
            setTheme("light")
        }
    }

    return (
        <div className="pt-6">
            <div className="flex justify-between space-x-4">
                <Link to="/">
                    <div className="text-sm font-semibold dark:hover:text-yellow-200">doubleOG</div>
                </Link>
                <div className="flex space-x-4 text-sm font-semibold">
                    <Link to="/blog">
                        <div>Blog</div>
                    </Link>
                    <Link to="/about">
                        <div>About</div>
                    </Link>
                    <button className="focus:outline-none" onClick={() => handleThemeToggle()}>
                        {
                            theme === "light" ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            ) : (
                                    <svg className="w-6 h-6 dark:hover:text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                )
                        }
                    </button>
                </div>
            </div>
            <hr className="my-6 border-gray-700 dark:border-white" />
        </div>
    )
}

export default Navbar