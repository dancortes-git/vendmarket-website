import React from "react"
import PropTypes from "prop-types";
import { Container, Col } from 'react-bootstrap';
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = ({data}) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes }
  } = data
  const footerNodes = nodes.filter(node => node.frontmatter.content === "Footer")
  const {frontmatter: { copyright }} = footerNodes[0]

  return (
    <Layout
      pageNotFound={true}
      copyright={copyright} >
      <SEO
        title="404: Not found"
        lang="pt-BR"
        keywords={keywords}
        description={description} />
      <section className="page-not-found">
        <Container className="d-flex flex-column mt-5 pt-5 justify-content-center align-items-center">
          <h1><Link to="/">Ops...</Link></h1>
          <h2><Link to="/">Page not found</Link></h2>
          <Col md={10} lg={5} className="text-center">
            <Link to="/">
              <Img fluid={data.pageNotFoundImage.childImageSharp.fluid} />
            </Link>
          </Col>
        </Container>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    pageNotFoundImage: file(relativePath: { eq: "page-not-found.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: "pt-BR" } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    )
    {
      nodes {
        frontmatter {
          content
          copyright
          title
        }
      }
    }
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFoundPage
