import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout pageTitle={data.site.siteMetadata.title}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
