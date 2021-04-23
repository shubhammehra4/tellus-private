import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PlaceList({
  id,
  name,
  imageSrc,
  layoutId,
  current,
  select,
}) {
  return (
    <motion.li
      layoutId={`${layoutId}-card`}
      className={
        current !== name
          ? `country grid max-w-xs my-8 xl:my-0 cursor-pointer`
          : `country grid max-w-xs my-8 xl:my-0 cursor-pointer opacity-0`
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={() => {
        select(() => ({ id, name }))
      }}
    >
      <GatsbyImage
        image={imageSrc}
        alt={name}
        className="country-image h-full w-full"
      />
      <motion.div
        className="relative place-items-center grid"
        style={{
          gridArea: "1/1",
        }}
      >
        <motion.h1
          layoutId={`${layoutId}-title`}
          className="country-name palanquin-bold text-white text-4xl tracking-widest mt-auto"
        >
          {name}
        </motion.h1>
        <motion.div
          layoutId={`${layoutId}-desc`}
          className="relative grid"
        ></motion.div>
      </motion.div>
    </motion.li>
  )
}
