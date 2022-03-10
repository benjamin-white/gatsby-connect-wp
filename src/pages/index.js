import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => 
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allWpPost.nodes.map(node => 
      <div key={node.slug}>
        <p><Link to={node.slug}>{node.title}</Link></p>
        <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
      </div>
    )}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date]}) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
