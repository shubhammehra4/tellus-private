import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function PlaceItem({
  name,
  imageSrc,
  layoutId,
  select,
  description,
  color,
  bg,
}) {
  return (
    <motion.div
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      exit={{ opacity: 0 }}
      style={{ pointerEvents: "auto" }}
      className="fixed z-10 top-0 h-screen w-screen"
      onClick={() => {
        select(null)
      }}
    >
      <motion.div
        layoutId={`${layoutId}-card`}
        className="grid h-1/2 max-w-3xl w-11/12 mx-auto pt-4"
      >
        <GatsbyImage
          image={imageSrc}
          alt={name}
          className="static-image h-full w-full"
        />
        <motion.div
          className="relative place-items-center grid"
          style={{
            gridArea: "1/1",
          }}
        >
          <motion.h1
            layoutId={`${layoutId}-title`}
            className="country-name palanquin-bold text-white text-4xl md:text-7xl lg:text-8xl opacity-50 tracking-widest"
          >
            {name}
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.05 } }}
          className="relative grid h-1/5 mt-auto"
          style={{
            gridArea: "1/1",
            backgroundColor: `${bg}`,
            background: `linear-gradient(0deg, ${bg} 0%, rgba(227,203,184,0) 100%)`,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        layoutId={`${layoutId}-desc`}
        style={{ backgroundColor: bg, color, fontFamily: "'Lato', sans-serif" }}
        className="flex flex-col justify-center items-center max-w-3xl w-11/12 pb-4 md:pb-0 md:h-2/5 mx-auto px-2 md:px-4 text-center text-sm md:text-xl"
      >
        <p>{description}</p>
        <Link
          to="/"
          className="mt-3 py-2 px-4 bg-gray-800 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 ease-in "
        >
          I'M IN
        </Link>
      </motion.div>
    </motion.div>
  )
}
