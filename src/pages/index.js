import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/seo"
import Container from "../components/container"

const Home = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Seo />
      <div className="bg-softDarken h-80 text-gray-200">
        <div className="line-1 anim-typewriter text-lg sm:text-sm">
          {siteMetadata.description}
        </div>
      </div>
    </Container>
  )
}

export default Home