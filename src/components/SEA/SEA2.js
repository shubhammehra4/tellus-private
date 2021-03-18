import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function SEA2() {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <StaticImage
          src="../../images/south-east-asia-2.jpg"
          alt="SOUTH EAST ASIA"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          className="static-image w-full h-full"
          height={1000}
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid sea-backdrop-2"
          style={{
            gridArea: "1/1",
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#33809C" }}
      >
        <h1
          className="text-2xl md:text-5xl mb-2 md:mb-4 tracking-widest"
          style={{
            color: "#B0D168",
            fontFamily: "'Palanquin', sans-serif",
            fontWeight: "700",
          }}
        >
          ELEMENTAL FORCES
        </h1>
        <p
          className="text-white text-sm md:text-lg max-w-5xl px-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          The soul of Southeast Asia has been forged by the elements. Mighty
          volcanoes have thrust the land up, and raging rivers have carved it
          down. Coral reefs have formed islands, and sea spray has sculpted them
          into surreal karst outcrops.
        </p>
      </div>
    </section>
  )
}

export default SEA2
