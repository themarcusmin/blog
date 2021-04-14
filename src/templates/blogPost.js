import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Container from "../components/container"

const shortcodes = { Link }

const BlogPost = ({ data: { mdx } }) => {
  return (
    <Container>
      <div>{mdx.frontmatter.date}</div>
      <div>{mdx.frontmatter.title}</div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D YYYY")
      }
    }
  }
`