import React from "react"
import { Link, graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"
import Seo from "../components/seo"
import Container from "../components/container"

const Blog = ({ data }) => {
  const posts = data.allMdx.edges
  const tags = data.tags.group

  return (
    <Container>
      <Seo extraTitle="Blog" />
      {/* All Posts */}
      <div className="text-2xl pb-3 font-semibold">All Posts</div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.slug
        return (
          <li key={slug}>
            <Link to={`/blog/${slug}`} className="text-blue-700 font-medium dark:text-yellow-200">
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
            <Link to={`/tags/${kebabCase(eachTag.tag)}`} className="underline">
              {`${eachTag.tag} (${eachTag.totalCount})${index === tags.length - 1 ? "" : ","}`}
            </Link>
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