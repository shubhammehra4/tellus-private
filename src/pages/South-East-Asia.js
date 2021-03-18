import React from "react"
import SEO from "../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import SEA1 from "../components/SEA/SEA1"
import SEA2 from "../components/SEA/SEA2"
import SEA3 from "../components/SEA/SEA3"
import SEA4 from "../components/SEA/SEA4"
import SEA5 from "../components/SEA/SEA5"

function SouthEastAsia() {
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
        transitionTime={800}
        infiniteLoop={true}
        swipeScrollTolerance={10}
        useKeyboardArrows={true}
      >
        <SEA1 />
        <SEA2 />
        <SEA3 />
        <SEA4 />
        <SEA5 />
      </Carousel>
    </>
  )
}

export default SouthEastAsia
