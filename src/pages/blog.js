import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/container"

const Blog = ({ data }) => {
  const posts = data.allMdx.edges
  const tags = data.tags.group
  console.log("here", tags.length)
  return (
    <Container>
      {/* All Posts */}
      <div className="text-2xl pb-3 font-semibold">All Posts</div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.slug
        return (
          <li>
            <Link to={`/blog/${slug}`} className="text-purple-600">
              {title}
            </Link>
          </li>
        )
      })}
      {/* Tags */}
      <div className="text-sm pt-3 flex flex-row flex-wrap space-x-2">
        <div>Browse by tag: </div>
        {tags.map((eachTag, index) => {
          return (
            <div className="underline">
              {`${eachTag.tag} (${eachTag.totalCount})${index === tags.length - 1 ? "" : ","}`}
            </div>
          )
        })}
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
    tags: allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`