import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function SEA3() {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <StaticImage
          src="../../images/south-east-asia-3.jpg"
          alt="SOUTH EAST ASIA"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          className="static-image w-full h-full"
          height={1000}
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid sea-backdrop-3"
          style={{
            gridArea: "1/1",
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#D9D4CB" }}
      >
        <h1
          className="text-2xl md:text-5xl mb-1 md:mb-4 tracking-widest"
          style={{
            color: "#4B4A48",
            fontFamily: "'Palanquin', sans-serif",
            fontWeight: "700",
          }}
        >
          SPIRITUAL SPACES
        </h1>
        <p
          className="text-sm md:text-lg max-w-5xl px-1"
          style={{ fontFamily: "'Lato', sans-serif", color: "#A57843" }}
        >
          Spirituality swirls around Southeast Asia like the smoke from incense
          sticks swirls around its myriad temples. At dawn inBuddhist nations,
          monks flood into the streets to gather alms in endless monochrome
          chains. Tribal people in remotevillages mark the new day's arrival
          with arcane animist rituals. Every aspect of life here has a spiritual
          dimension.
        </p>
      </div>
    </section>
  )
}

export default SEA3
