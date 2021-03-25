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
  const indicatorStyles = {
    background: "#828282",
    width: 18,
    height: 6,
    display: "inline-block",
    margin: "0 8px",
  }

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
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            if (index === 4) {
              const indicators = document.querySelector(".control-dots")
              indicators.style.display = "none"
            }
            if (index === 3) {
              const indicators = document.querySelector(".control-dots")
              indicators.style.display = "block"
            }
            return (
              <li
                style={{ ...indicatorStyles, background: "#fff" }}
                aria-label={`Slide - ${label} ${index + 1}`}
                title={`${label} ${index + 1}`}
              />
            )
          }
          return (
            <li
              className="focus:outline-none"
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              tabIndex={0}
              role="button"
              title={`${label} ${index + 1}`}
              aria-label={`Slide - ${label} ${index + 1}`}
            />
          )
        }}
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
