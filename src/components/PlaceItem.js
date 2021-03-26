import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

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
        className="grid h-1/2 max-w-5xl w-11/12 mx-auto pt-4"
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
            className="country-name palanquin-bold text-white text-4xl md:text-5xl lg:text-7xl opacity-50 tracking-widest"
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
        animate={{ opacity: 1, transition: { delay: 0.05 } }}
        style={{ backgroundColor: bg, color }}
        className="flex justify-center items-center max-w-5xl w-11/12 pb-4 md:pb-0 md:h-1/4 mx-auto px-2 md:px-4 text-center text-sm md:text-xl"
      >
        {description}
      </motion.div>
    </motion.div>
  )
}
