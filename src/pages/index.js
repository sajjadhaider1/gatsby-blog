import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


function IndexPage ({ data }) {
  const nodes = data.allStrapiArticle.nodes
  return (
    nodes.map(node => 
    <>
      <h1>{node.title}</h1>
      <p>{node.content}</p>
      <GatsbyImage image={node.image[0].localFile.childImageSharp.gatsbyImageData} alt={"abcd"} />
    </>
    )
  )
}

export const query = graphql`
  {
    allStrapiArticle {
      nodes {
        id
        title
        content
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO]
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage
