import React from "react"
import SEO from "../../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import SEA1 from "../../components/SEA/SEA1"
import SEA2 from "../../components/SEA/SEA2"
import SEA3 from "../../components/SEA/SEA3"
import SEA4 from "../../components/SEA/SEA4"
import SEA5 from "../../components/SEA/SEA5"

function SouthEastAsia({ data }) {
  return (
    <>
      <SEO title="SOUTH EAST ASIA" />
      <Carousel
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        dynamicHeight={false}
        autoPlay={true}
        interval={8000}
        transitionTime={600}
        // infiniteLoop={true}
        swipeScrollTolerance={80}
      >
        <SEA1 src={getImage(data.sea1)} />
        <SEA2 src={getImage(data.sea2)} />
        <SEA3 src={getImage(data.sea3)} />
        <SEA4 src={getImage(data.sea4)} />
        <SEA5 src={getImage(data.sea5)} />
      </Carousel>
    </>
  )
}
export const pageQuery = graphql`
  query SEAImageQuery {
    sea1: file(relativePath: { eq: "south-east-asia-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1500
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sea2: file(relativePath: { eq: "south-east-asia-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1500
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sea3: file(relativePath: { eq: "south-east-asia-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1500
          quality: 30
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sea4: file(relativePath: { eq: "south-east-asia-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1500
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sea5: file(relativePath: { eq: "south-east-asia-5.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1500
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default SouthEastAsia
