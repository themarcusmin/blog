import React from "react"
import { Link, graphql } from "gatsby"

import Container from "../components/container"

const Tags = ({ data }) => {
    return (
        <Container>
            Tags
        </Container>
    )
}

export default Tags

export const pageQuery = graphql`
    {
        allMdx {
            group(field: frontmatter___tags) {
                tag: fieldValue
                totalCount
            }
        }
    }
`