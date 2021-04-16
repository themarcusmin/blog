import React, { useState, useEffect } from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Container = ({ children }) => {
    const [YCoord, setYCoord] = useState(0)
    useEffect(() => {
        window.onscroll = () => {
            setYCoord(window.scrollY)
        }
    }, [])
    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    function chevronCSS() {
        return `w-10 h-10 fixed right-5 bottom-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer ${YCoord > 150 ? "block" : "hidden"}`
    }

    return (
        <div className="mx-auto h-full w-10/12 md:w-5/12 flex flex-col font-noto-serif">
            <Navbar />
            <div className="mb-auto flex-grow h-full">
                {children}
            </div>
            <svg onClick={() => scrollTop()} className={chevronCSS()} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" /></svg>
            <Footer />
        </div>
    )
}

export default Container