import React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import Container from "../components/container"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <Container>
      <Seo extraTitle={`Tags x ${tag}`} />
      <div className="text-xl pb-3 font-semibold">{tagHeader}</div>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title } = node.frontmatter
        return (
          <li key={slug}>
            <Link to={slug} className="text-purple-600 dark:text-yellow-200 underline">
              {title}
            </Link>
          </li>
        )
      })}
      <Link to="/tags" className="text-purple-600 dark:text-purple-400">
        <div className="text-sm pt-3">
          Browse all tags
        </div>
      </Link>
    </Container>
  )
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
    allMdx (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`