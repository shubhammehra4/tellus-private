import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SEO from "../components/seo"

function Story() {
  return (
    <>
      <SEO title="OUR STORY" />
      <section className="w-screen h-screen flex flex-col md:flex-row">
        <StaticImage
          className="md:w-1/2"
          src="../images/bali.jpg"
          alt="OUR STORY"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
        />
        <div className="text-center md:w-1/2 flex flex-col items-center justify-center px-8">
          <h1 className="palanquin-bold text-4xl lg:text-6xl text-gray-800 tracking-widest mt-2 mb-8 md:mb-12">
            OUR STORY
          </h1>
          <p className="lato-reg text-center md:w-3/5 story">
            Everything began with a story of friendship. Some 25 years ago,
            three passionate friends decided to put together their passion for
            people and places to create a new concept in travel. We called it
            Tellus – the Latin word for Earth – because that was exactly what we
            wanted to offer to our clients.
          </p>
          <p className="lato-reg text-center md:w-3/5 mt-4 md:mt-8 story">
            Over the years, Tellus grew into a healthy company with four
            distinct facets and bit by bit like-minded people joined in and the
            Tellus team matured into a larger family of travel enthusiasts,
            ready to share their passion which is as fresh as day one.
          </p>
          <Link to="/">
            <button className="px-12 py-4 bg-gray-500 text-white mt-4 md:mt-8 mb-2 focus:outline-none">
              HOME
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Story
