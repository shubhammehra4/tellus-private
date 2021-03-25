import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PlaceItem({ name, imageSrc, layoutId, select }) {
  return (
    <motion.div
      className="fixed z-10 top-0 h-full w-full overlay"
      onClick={() => {
        select(null)
      }}
    >
      <motion.div
        layoutId={`${layoutId}-card`}
        className="grid h-3/4 max-w-5xl mx-auto pt-3"
      >
        <GatsbyImage
          image={imageSrc}
          alt={name}
          className="static-image h-full w-full"
        />
        <div
          className="relative grid"
          style={{
            gridArea: "1/1",
          }}
        >
          <motion.h1
            layoutId={`${layoutId}-title`}
            className="country-name palanquin-bold text-center text-white text-opacity-75 text-4xl tracking-widest mt-1"
          >
            {name}
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  )
}
