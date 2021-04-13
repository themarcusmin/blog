import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/container"

const Blog = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Container>
      <div>Welcome to my rant</div>
      <div className="text-2xl font-semibold">All Posts</div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.slug
        return (
          <Link to={slug}>
            <div>
              {title}
            </div>
          </Link>
        )
      })}
    </Container>
  )
}

export default Blog

export const postQuery = graphql`
{
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`