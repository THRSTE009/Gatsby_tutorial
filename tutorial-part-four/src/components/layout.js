// layout.js is a non-page component.
import React from "react"

//importing the following components into this page:
import { css } from "@emotion/react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

//  Notes
/*  1. div 1 contains the css.
    link 1 is to the home page.
    link 2 is to the about page.
    '$' represents a jquery function.
    'div' is an HTML Content Division element. It's a generic container for flow content.
*/

/*  2. What does {children} mean?
    The top level component is the page.
    When the top level component changes React will re-render all children.
    I.e. shared components like navs will unmount and remount.
    So the children must be the components for a specific page.

    What does {children} do?
    I assume it unmounts and remounts the children components for the page.
*/

/*  3. Added a staticQuery 'hook' variable called 'data' to store the 'title' that is returned from the query below.
    'data' is used in line 59.
    ***NB*** Only pages can make page queires. Non-page components, such as layout, can use StaticQuery. 
    See tutorial 7 for further details.
*/
export default function Layout({ children }) 
{
    const data = useStaticQuery
    (
      graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }`
    )
    
    return (
      <div
      css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};`
      }>
      
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}>
          {data.site.siteMetadata.title}
        </h3>
    </Link>

    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}>
        
      About
    </Link>
    {children}
  </div>
  )
}