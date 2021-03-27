import React, { useState } from "react"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import Place from "../../components/Place"
import PlaceItem from "../../components/PlaceItem"
import { items } from "../../components/SEA/items"

export default function Places({ data }) {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <SEO title="Places" />
      <AnimateSharedLayout type="crossfade">
        <section className="w-screen min-h-screen flex flex-col justify-evenly items-center">
          <h1
            className="palanquin-bold text-center text-4xl lg:text-7xl md:text-6xl text-gray-700 my-10 xl:my-0 px-1"
            style={{ letterSpacing: "0.3em" }}
          >
            SOUTH EAST ASIA
          </h1>
          <motion.ul className="w-full flex flex-wrap items-center justify-evenly">
            {items.map((item, i) => (
              <Place
                key={i}
                id={i}
                layoutId={item.title}
                name={item.title}
                isSlected={selected?.name === item.title}
                imageSrc={getImage(data[`${item.title}`])}
                current={selected?.name}
                select={setSelected}
              />
            ))}
          </motion.ul>
          <AnimatePresence exitBeforeEnter>
            {selected && (
              <PlaceItem
                key="item"
                name={selected.name}
                layoutId={items[selected.id].title}
                imageSrc={getImage(data[selected.name])}
                select={setSelected}
                description={items[selected.id].description}
                color={items[selected.id].color}
                bg={items[selected.id].bg}
              />
            )}
          </AnimatePresence>
        </section>
      </AnimateSharedLayout>
    </>
  )
}
export const pageQuery = graphql`
  query MyQuery {
    BALI: file(relativePath: { eq: "bali.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 768
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    CAMBODIA: file(relativePath: { eq: "cambodia.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 768
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    LAOS: file(relativePath: { eq: "laos.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 768
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    VIETNAM: file(relativePath: { eq: "vietnam.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 768
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    THAILAND: file(relativePath: { eq: "thailand.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 768
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
