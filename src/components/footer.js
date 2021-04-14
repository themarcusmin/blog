import React from "react"

const Footer = () => {
    return (
        <div className="text-xs text-center inset-x-0 bottom-0">
            <hr className="mt-6 border-gray-300" />
            <div className="my-4">
                <a className="text-blue-600 underline hover:text-blue-900" href="http://www.github.com">
                    I made this
                </a>
                {" with "}
                <a className="text-blue-600 underline hover:text-blue-900" href="https://www.gatsbyjs.com/">
                    GatsbyJS
            </a>
            </div>
        </div>
    )
}

export default Footer