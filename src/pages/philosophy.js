import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SEO from "../components/seo"

function Philosophy() {
  return (
    <>
      <SEO title="OUR PHILOSOPHY" />
      <section className="w-screen h-screen flex flex-col lg:flex-row">
        <StaticImage
          className="lg:w-1/2"
          src="../images/philosophy.jpg"
          alt="OUR PHILOSOPHY"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
        />
        <div className="text-center lg:w-1/2 flex flex-col items-center justify-center px-8">
          <h1 className="palanquin-bold text-4xl lg:text-6xl text-gray-800 tracking-widest mt-2 mb-6 md:mb-12">
            OUR PHILOSOPHY
          </h1>
          <p className="lato-reg text-center md:w-3/5 text-base md:text-xl lg:text-2xl">
            Travel means discovery and new experiences. We strive for
            responsible tourism as defined in the 2002 Cape Town Declaration:
            <br />
            <br className="hidden lg:block" />
            To minimize negative economic, environmental and social impacts.
            <br />
            <br className="hidden lg:block" />
            To make positive contributions to the conservation of natural and
            cultural heritage, to the maintenance of the world’s diversity.
            <br />
            <br className="hidden lg:block" />
            To provide more enjoyable experiences for tourists through
            meaningful connections with local people and to provide a greater
            understanding of local cultural, social and environmental issues.
            <br />
            <br className="hidden lg:block" />
            All our programs are designed to have a minimal impact on the local
            environment.
          </p>
          <Link to="/">
            <button className="px-8 py-2 md:px-12 md:py-4 bg-gray-500 text-white mt-4 md:mt-8 mb-2 focus:outline-none">
              HOME
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Philosophy
