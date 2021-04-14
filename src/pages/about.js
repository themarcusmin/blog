import React from "react"
import { graphql } from "gatsby"

import Helmet from "react-helmet"
import Container from "../components/container"

const About = ({ data }) => {
    const title = data.site.siteMetadata.title
    return (
        <Container>
            <Helmet title={`${title} | about`} />
            <div className="flex flex-col space-y-2">
                <div>I'm Min Min Oo. I like all things digital and writing.</div>
                <div>So this blog is a perfect excuse for me to write.</div>
                <div>Here is where I document all sorts of my life experiences. It could be about my thoughts, books, travels or even new things I find thrilling.</div>
            </div>
        </Container>
    )
}

export default About

export const titleQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`