import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/container"

const Blog = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Container>
      <div className="text-2xl pb-3 font-semibold">All Posts</div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.slug
        return (
          <li>
            <Link to={slug} className="text-purple-600">
              {title}
            </Link>
          </li>
        )
      })}
      <div className="text-sm pt-3">
        Browse by tag:
      </div>
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