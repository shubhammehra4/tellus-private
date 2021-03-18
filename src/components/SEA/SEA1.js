import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function SEA1() {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <StaticImage
          src="../../images/south-east-asia-1.jpg"
          alt="SOUTH EAST ASIA"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          className="static-image w-full h-full"
          height={500}
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid sea-backdrop-1"
          style={{
            gridArea: "1/1",
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#7AB1C4" }}
      >
        <h1
          className="text-2xl md:text-5xl mb-2 md:mb-4 tracking-widest"
          style={{
            color: "#613636",
            fontFamily: "'Palanquin', sans-serif",
            fontWeight: "700",
          }}
        >
          SOUTH EAST ASIA
        </h1>
        <p
          className="text-white text-sm md:text-lg max-w-3xl px-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Wrapped in rainforests, edged by golden sands, crowned by volcanoes,
          studded with ruins of lost civilisations: This is Southeast Asia
        </p>
      </div>
    </section>
  )
}

export default SEA1
