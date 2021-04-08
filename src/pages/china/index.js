import React from "react"
import SEO from "../../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { slides } from "../../components/CHN/slides"
import Slide from "../../components/Slide"

function China({ data }) {
  const indicatorStyles = {
    background: "#828282",
    width: 35,
    height: 5,
    display: "inline-block",
    margin: "0 8px",
  }

  return (
    <>
      <SEO title="CHINA" description={slides[0].description} />
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
            link={`/final`}
            value={`CHINA`}
          />
        ))}
      </Carousel>
    </>
  )
}
export const pageQuery = graphql`
  query CHNImageQuery {
    CHN1: file(relativePath: { eq: "china-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    CHN2: file(relativePath: { eq: "china-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    CHN3: file(relativePath: { eq: "china-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    CHN4: file(relativePath: { eq: "china-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 1440
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    CHN5: file(relativePath: { eq: "china-5.jpg" }) {
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

export default China
