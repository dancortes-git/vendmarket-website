import React from "react"
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import { Container, Card } from "react-bootstrap";
import './Home.css';

const Home = ({altHomeImage, homeImageFileName}) => {

  const {images} = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {extension: {in: ["jpg", "png", "jpeg"]}}, sort: {fields: name}) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 1900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `)

  const homeImageEdge = images.edges.filter(edge => edge.node.base === homeImageFileName)
  const {node: { childImageSharp } } = homeImageEdge[0]

  return (
    <section
      id="home"
      className="">

      <Card className="image-card bg-dark text-white text-center">
        <Img className="img-fluid" fluid={childImageSharp.fluid} style={{width: 'inherit', height: 'inherit'}}/>
        <Card.ImgOverlay className="no-padding">
          <Container>
            <div className="intro-text">
              <div className="intro-heading">Vendmarket</div>
              <div className="intro-lead-in">vending machines | micromarkets</div>
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </section>
  )
}

export default Home
