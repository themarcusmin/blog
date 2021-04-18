import React from "react"

import Seo from "../components/seo"
import Container from "../components/container"

const NotFound = ({ data }) => {
  return (
    <Container>
      <Seo extraTitle="404" />
      <div className="text-2xl font-semibold">Page not found</div>
    </Container>
  )
}

export default NotFound