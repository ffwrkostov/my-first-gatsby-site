import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPosts {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}, limit: 10) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog Page" />
