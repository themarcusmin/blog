import React from "react"
import { graphql } from "gatsby"

import Helmet from "react-helmet"
import Container from "../components/container"

const NotFound = ({ data }) => {
    const title = data.site.siteMetadata.title
    return (
        <Container>
            <Helmet title={`${title} | 404`} />
            <div className="text-2xl font-semibold">Page not found</div>
        </Container>
    )
}

export default NotFound

export const titleQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`