import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function SEA4({ src }) {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <GatsbyImage
          image={src}
          alt="SOUTH EAST ASIA"
          className="static-image w-full h-full"
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid sea-backdrop-4"
          style={{
            gridArea: "1/1",
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#0C111C" }}
      >
        <h1
          className="text-2xl md:text-5xl mb-1 md:mb-4 tracking-widest"
          style={{
            color: "#FFEB61",
            fontFamily: "'Palanquin', sans-serif",
            fontWeight: "700",
          }}
        >
          URBAN ADVENTURES
        </h1>
        <p
          className="text-white text-sm md:text-lg max-w-5xl px-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          For many travellers, the first taste of the region is the urban chaos
          of Bangkok, or the organised modernity of Singapore, buteach of
          Southeast Asia's capitals has its own unique character, defined by
          religion, culture, geography and learning the rhythms of each is part
          of the magic here.
        </p>
      </div>
    </section>
  )
}

export default SEA4
