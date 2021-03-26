import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function SEA1({
  title,
  titleColor,
  description,
  descriptionColor,
  position,
  backgroundColor,
  src,
  last,
}) {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-2/3 md:h-3/4">
        <GatsbyImage
          image={src}
          alt={title}
          className="static-image w-full h-full push"
          objectPosition={position}
        />
        <div
          className="w-screen mt-auto h-1/6 relative place-items-end grid"
          style={{
            gridArea: "1/1",
            backgroundColor,
            background: `linear-gradient(0deg, ${backgroundColor} 0%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>
      </div>
      <div
        className="w-screen h-1/3 md:h-1/4 flex flex-col justify-center items-center text-center"
        style={{ backgroundColor }}
      >
        <h1
          className="palanquin-bold text-2xl md:text-5xl mb-2 md:mb-4 tracking-widest"
          style={{
            color: titleColor,
          }}
        >
          {title}
        </h1>
        <p
          className={
            description.length > 150
              ? `text-sm md:text-lg lg:text-xl max-w-5xl px-2`
              : `text-sm md:text-lg lg:text-xl max-w-3xl px-2`
          }
          style={{ fontFamily: "'Lato', sans-serif", color: descriptionColor }}
        >
          {description}
        </p>
        {last && (
          <Link className="mt-5" to="/South-East-Asia/Places">
            <button
              id="go"
              className="px-10 py-3 bg-white font-bold tracking-widest hover:bg-black hover:text-white transition duration-300 ease-in-out opacity-0"
            >
              GO
            </button>
          </Link>
        )}
      </div>
    </section>
  )
}
