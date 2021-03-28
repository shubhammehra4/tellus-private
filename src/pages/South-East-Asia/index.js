import React from "react"
import SEO from "../../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { slides } from "../../components/SEA/slides"
import Slide from "../../components/Slide"

function SouthEastAsia({ data }) {
  const indicatorStyles = {
    background: "#828282",
    width: 35,
    height: 5,
    display: "inline-block",
    margin: "0 8px",
  }

  return (
    <>
      <SEO title="SOUTH EAST ASIA" description={slides[0].description} />
      <Carousel
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        dynamicHeight={false}
        autoPlay={true}
        interval={8000}
        transitionTime={600}
        swipeScrollTolerance={50}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            if (index === 4) {
              const indicators = document.querySelector(".control-dots")
              const button = document.querySelector("#go")
              indicators.style.display = "none"
              setTimeout(() => {
                button.style.opacity = 1
              }, 1000)
            }
            if (index === 3) {
              const indicators = document.querySelector(".control-dots")
              indicators.style.display = "block"
            }
            return (
              <button
                style={{ ...indicatorStyles, background: "#fff" }}
                aria-label={`Slide - ${label} ${index + 1}`}
                title={`${label} ${index + 1}`}
              />
            )
          }
          return (
            <button
              className="focus:outline-none"
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`Slide - ${label} ${index + 1}`}
            />
          )
        }}
      >
        {slides.map((s, i) => (
          <Slide
            key={s.id}
            title={s.title}
            titleColor={s.titleColor}
            description={s.description}
            descriptionColor={s.descriptionColor}
            position={s.position}
            backgroundColor={s.backgroundColor}
            src={getImage(data[s.uid])}
            last={i === 4}
            link={`/south-east-asia/places/`}
          />
        ))}
      </Carousel>
    </>
  )
}
export const pageQuery = graphql`
  query SEAImageQuery {
    SEA1: file(relativePath: { eq: "south-east-asia-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    SEA2: file(relativePath: { eq: "south-east-asia-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    SEA3: file(relativePath: { eq: "south-east-asia-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          quality: 40
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    SEA4: file(relativePath: { eq: "south-east-asia-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    SEA5: file(relativePath: { eq: "south-east-asia-5.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default SouthEastAsia
