import React, { useState } from "react"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

function PlaceItem({ name, imageSrc, layoutId, select }) {
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
            className="country-name palanquin-bold text-center text-white text-opacity-75 text-6xl tracking-widest mt-1"
          >
            {name}
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  )
}

function PlaceList({ name, imageSrc, layoutId, current, select }) {
  return (
    <motion.div
      layoutId={`${layoutId}-card`}
      className={
        current !== layoutId
          ? `country grid max-w-xs my-8 xl:my-0 cursor-pointer`
          : `country grid max-w-xs my-8 xl:my-0 cursor-pointer opacity-0`
      }
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

export default function Places({ data }) {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <SEO title="Places" />
      <section className="w-screen min-h-screen flex flex-col justify-evenly items-center">
        <AnimateSharedLayout type="crossfade">
          <h1
            className="palanquin-bold text-center text-5xl md:text-6xl text-gray-300 my-10 xl:my-0"
            style={{ letterSpacing: "0.3em" }}
          >
            SOUTH EAST ASIA
          </h1>
          <motion.div className="w-full flex flex-col xl:flex-row items-center justify-evenly">
            <PlaceList
              layoutId="BALI"
              name="BALI"
              imageSrc={getImage(data.bali)}
              current={selected}
              select={setSelected}
            />
            <PlaceList
              layoutId="CAMBODIA"
              name="CAMBODIA"
              imageSrc={getImage(data.cambodia)}
              current={selected}
              select={setSelected}
            />
            <PlaceList
              layoutId="LAOS"
              name="LAOS"
              imageSrc={getImage(data.laos)}
              current={selected}
              select={setSelected}
            />
            <PlaceList
              layoutId="VIETNAM"
              name="VIETNAM"
              imageSrc={getImage(data.vietnam)}
              current={selected}
              select={setSelected}
            />
            <PlaceList
              layoutId="THAILAND"
              name="THAILAND"
              imageSrc={getImage(data.thailand)}
              current={selected}
              select={setSelected}
            />
          </motion.div>
          <AnimatePresence>
            {selected && (
              <PlaceItem
                name={selected}
                layoutId={selected}
                imageSrc={getImage(data[selected.toLowerCase()])}
                select={setSelected}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </section>
    </>
  )
}
export const pageQuery = graphql`
  query MyQuery {
    bali: file(relativePath: { eq: "bali.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 700
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    cambodia: file(relativePath: { eq: "cambodia.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 700
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    laos: file(relativePath: { eq: "laos.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 700
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vietnam: file(relativePath: { eq: "vietnam.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 700
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    thailand: file(relativePath: { eq: "thailand.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 700
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
