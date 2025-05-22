import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Home from "../components/Home";

import Who from "../components/Who";
import How from "../components/How";
import What from "../components/What";
import Contact from "../components/Contact";

const IndexPage = ({ data, pageContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes }
  } = data

  const headerNodes = nodes.filter(node => node.frontmatter.content === "Header")
  const {frontmatter: { menuItems }} = headerNodes[0]

  const footerNodes = nodes.filter(node => node.frontmatter.content === "Footer")
  const {frontmatter: { copyright }} = footerNodes[0]

  const homeNodes = nodes.filter(node => node.frontmatter.content === "Home")
  const homeData = homeNodes[0]

  const whoNodes = nodes.filter(node => node.frontmatter.content === "Who")
  const whoData = whoNodes[0]

  const howNodes = nodes.filter(node => node.frontmatter.content === "How")
  const howData = howNodes[0]

  const whatNodes = nodes.filter(node => node.frontmatter.content === "What")
  const whatData = whatNodes[0]

  const contactNodes = nodes.filter(node => node.frontmatter.content === "Contact")
  const contactData = contactNodes[0]

  return (
    <Layout
      menuItems={menuItems}
      langTextMap={langTextMap}
      langKey={langKey}
      defaultLang={defaultLang}
      copyright={copyright}>
      <SEO
        lang={langKey}
        title="-"
        keywords={keywords}
        description={description} />
      <Home
        altHomeImage={homeData.frontmatter.image.alt}
        homeImageFileName={homeData.frontmatter.image.filename} />
      <Who
        title={whoData.frontmatter.title}
        description={whoData.frontmatter.description}
      />
      <How
        title={howData.frontmatter.title}
        mission={howData.frontmatter.mission}
        values={howData.frontmatter.values}
        vision={howData.frontmatter.vision}
      />
      <What
        title={whatData.frontmatter.title}
        description={whatData.frontmatter.description}
      />
      <Contact
        title={contactData.frontmatter.title}
        description={contactData.frontmatter.description}
        phone={contactData.frontmatter.phone}
        email={contactData.frontmatter.email}
        whatslink={contactData.frontmatter.whatslink}
      />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    )
    {
      nodes {
        frontmatter {
          content
          menuItems {
            label
            section
          }
          copyright
          image {
            alt
            filename
          }
          title
          description
          phone
          whatslink
          email
          mission {
            icon
            title
            description
          }
          values {
            icon
            title
            description
          }
          vision {
            icon
            title
            description
          }

        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pageContext: {
    langKey: "pt-BR",
    defaultLang: "pt-BR",
    langTextMap: {},
  },
};

export default IndexPage
