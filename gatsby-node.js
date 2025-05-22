/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const getBaseUrl = require("./src/utils/getBaseUrl");
const { defaultLang, langTextMap = {} } = require("./config/site");
/**
 * add fileName to node for markdown files
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileName = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "fileName",
      value: fileName,
    });

    createNodeField({
      node,
      name: "directoryName",
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
};
/**
 * Create index, cookie and privacy policy pages
 */
exports.createPages = ({ graphql, actions }) => {
  const indexTemplate = path.resolve("./src/templates/index-template.js");

  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        distinct(field: fields___langKey)
      }
    }
  `)
    .then(result => {
      result.data.allMarkdownRemark.distinct.forEach((langKey) => {
        const pathLang = getBaseUrl(defaultLang, langKey)
        // index
        createPage({
          path: pathLang,
          component: indexTemplate,
          context: {
            langKey,
            defaultLang,
            langTextMap,
          },
        });
      });
    })
    .catch(error => {
      console.log('Error trying to create pages: ', error)
    });
}
