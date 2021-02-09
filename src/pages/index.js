import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import "../components/global.css"


class HomeIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home Page" />
        <Bio 
          heading="MGA Group 1"
          subheading="Your number one resource for CySA+ content"
        />
        <Carousel key="blog" title="Blog Posts" data={data.blog.edges} />
        <Carousel key="youtube" title="YouTube" data={data.youtube.edges} />
      </Layout>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blog: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            title
            description
            url {
              childImageSharp {
                fixed(width: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          id
        }
      }
    }
    youtube: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "youtube" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            title
            description
            url {
              childImageSharp {
                fixed(width: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;
