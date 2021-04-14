import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
  console.log(siteMetadata)
  return (
    <Container>
      <div className="bg-darken h-80 text-gray-200">
        <div className="line-1 anim-typewriter text-lg sm:text-sm">
          {siteMetadata.description}
        </div>
      </div>
    </Container>
    // <div className="bg-darken h-screen text-gray-200">
    //   {siteMetadata.title}
    //   {siteMetadata.description}
    //   <div className="line-1 anim-typewriter"></div>
    /* <div className="mx-auto w-10/12 md:w-6/12">
      <Navbar />
      <hr className="my-6 border-gray-700" />
      <div>Welcome to my rant</div>
      <div className="text-2xl font-semibold">Recent Posts</div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div>
            <h1>{title}</h1>
            <p>{node.frontmatter.date}</p>
            <p>{node.frontmatter.description}</p>
          </div>
        )
      })}
      <div>>>>Browse by Tag</div>
    </div>
    <Footer /> */
    /* </div> */
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