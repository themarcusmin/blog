import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import Container from "../components/container"

const Home = ({ data }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Helmet title={siteMetadata.title} />
      <div className="bg-softDarken h-80 text-gray-200">
        <div className="line-1 anim-typewriter text-lg sm:text-sm">
          {siteMetadata.description}
        </div>
      </div>
    </Container>
  )
}

export default Home