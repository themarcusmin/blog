import React from "react"
import Header from "./header"

const Container = ({children}) => {
    return (
        <div>
        <Header />
            Container
            {children}
        </div>
    )
}

export default container