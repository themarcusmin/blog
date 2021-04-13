import React from "react"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Container = ({ children }) => {
    return (
        <div className="mx-auto h-screen w-10/12 md:w-6/12 flex flex-col">
            <Navbar />
            <hr className="my-6 border-gray-700" />
            <div className="mb-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Container