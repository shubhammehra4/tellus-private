import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function SLIDE({
  title,
  titleColor,
  description,
  descriptionColor,
  position,
  backgroundColor,
  src,
  last,
  link,
  value,
}) {
  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="grid w-screen h-3/5 md:h-3/4">
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
        className="w-screen h-2/5 md:h-1/4 flex flex-col justify-center items-center text-center"
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
            description.length > 200
              ? `text-sm md:text-lg lg:text-xl max-w-9xl px-2`
              : `text-sm md:text-lg lg:text-xl max-w-3xl px-2 mb-10 md:mb-0`
          }
          style={{ fontFamily: "'Lato', sans-serif", color: descriptionColor }}
        >
          {description}
        </p>
        {last && (
          <Link className="mt-4 md:mt-5" to={link} state={{ value }}>
            <button
              id="go"
              className="px-6 md:px-10 py-1 md:py-3 bg-white font-bold text-sm md:text-base tracking-widest hover:bg-black hover:text-white transition duration-300 ease-in-out opacity-0"
            >
              GO
            </button>
          </Link>
        )}
      </div>
    </section>
  )
}
