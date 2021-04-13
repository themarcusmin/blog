import React from "react"

const Footer = () => {
    return (
        <div className="text-xs text-center mb-5">
            <hr className="my-4 border-gray-300" />
            <a className="text-blue-600 underline hover:text-blue-900" href="http://www.github.com">
                I made this
            </a>
            {" with "}
            <a className="text-blue-600 underline hover:text-blue-900" href="https://www.gatsbyjs.com/">
                GatsbyJS
            </a>
        </div>
    )
}

export default Footer