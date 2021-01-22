import React from "react"
import { graphql } from "gatsby"  // why does this import have '{}' while the others do not?
import Layout from "../components/layout"

/* "Page queries live outside of the component definition — 
    by convention at the end of a page component file —
    and are only available on page components." */

export default function About({ data }) //  why is 'data' inside {}?
{
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

/* Exporting a constant named 'query' and set its value to be a graphql template
    with the query between two backticks.
    This query retrieves the 'title' in about.js. 
    Without this query line 13 will return an error "TypeError: Cannot read property 'site' of undefined." 
*/
  export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`