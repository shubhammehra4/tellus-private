import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PlaceList({
  name,
  imageSrc,
  layoutId,
  current,
  select,
}) {
  return (
    <motion.div
      layoutId={`${layoutId}-card`}
      className={
        current !== layoutId
          ? `country grid max-w-xs my-8 xl:my-0 cursor-pointer`
          : `country grid max-w-xs my-8 xl:my-0 cursor-pointer opacity-0`
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={() => {
        select(name)
      }}
    >
      <GatsbyImage
        image={imageSrc}
        alt={name}
        className="country-image h-full w-full"
      />
      <div
        className="relative place-items-center grid"
        style={{
          gridArea: "1/1",
        }}
      >
        <motion.h1
          layoutId={`${layoutId}-title`}
          className="country-name palanquin-bold text-white text-4xl tracking-widest"
        >
          {name}
        </motion.h1>
      </div>
    </motion.div>
  )
}
