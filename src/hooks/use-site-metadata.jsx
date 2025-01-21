import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
