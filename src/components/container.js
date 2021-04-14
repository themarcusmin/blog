import React from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Container = ({ children }) => {
    return (
        <div className="mx-auto h-full w-10/12 md:w-6/12 flex flex-col font-noto-serif">
            <Navbar />
            <div className="mb-auto flex-grow h-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Container