import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import Container from "../components/container"

const Home = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const siteDescription = data.site.siteMetadata.description
  // const posts = data.allMdx.edges

  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Helmet title={siteMetadata.title} />
      <div className="bg-darken h-80 text-gray-200">
        <div className="line-1 anim-typewriter text-lg sm:text-sm">
          {siteMetadata.description}
        </div>
      </div>
    </Container>
  )
}

export default Home

// export const pageQuery = graphql`
//     {
//     site {
//       siteMetadata {
//         description
//         title
//         author {
//           name
//           summary
//         }
//       }
//     }
//     allMdx(sort: {order: DESC, fields: frontmatter___date}) {
//         edges {
//           node {
//             slug
//             excerpt
//             frontmatter {
//               date(formatString: "MMMM D YYYY")
//               description
//               title
//             }
//           }
//         }
//       }
//   }
// `