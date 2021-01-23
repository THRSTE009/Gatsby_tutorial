import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
    const post = data.markdownRemark    // pull in data from the markdown post.
    return (
        <Layout>            
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangeriouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
        }
        }
    }
    `