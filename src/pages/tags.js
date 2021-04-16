import React from "react"
import { Link, graphql } from "gatsby";

import kebabCase from "lodash/kebabCase"

import Seo from "../components/seo"
import Container from "../components/container"

const AllTags = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  }
}) => {
  return (
    <Container>
      <Seo extraTitle="Tags" />
      <div className="text-2xl pb-3 font-semibold">Tags</div>
      {group.map(tag => {
        return (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}`} className="text-purple-600">
              {`${tag.fieldValue} (${tag.totalCount})`}
            </Link>
          </li>
        )
      })}
    </Container>
  )
}

export default AllTags

export const tagsQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`