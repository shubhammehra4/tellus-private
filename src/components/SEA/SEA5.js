import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function SEA5({ src }) {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <GatsbyImage
          image={src}
          alt="SOUTH EAST ASIA"
          className="static-image w-full h-full"
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid sea-backdrop-5"
          style={{
            gridArea: "1/1",
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor: "#181A0E" }}
      >
        <h1
          className="text-2xl md:text-5xl mb-1 md:mb-4 tracking-widest"
          style={{
            color: "#B0D168",
            fontFamily: "'Palanquin', sans-serif",
            fontWeight: "700",
          }}
        >
          EPICUREAN ENCOUNTERS
        </h1>
        <p
          className="text-white text-sm md:text-lg max-w-5xl px-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Southeast Asia is both a melting pot and a cooking pot, where the
          flavours of some of the world's greatest cuisines melt intoone
          another, throwing up ever more mesmerising combinations. This is a
          region where umble hawker stalls come with Michelin stars.
        </p>
        <Link className="mt-6" to="/South-East-Asia/Places">
          <button className="px-10 py-3 bg-white font-bold tracking-widest hover:bg-black hover:text-white transition duration-300 ease-in-out">
            GO
          </button>
        </Link>
      </div>
    </section>
  )
}

export default SEA5
