import React, { useState } from "react"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import Place from "../../components/Place"
import PlaceItem from "../../components/PlaceItem"

export default function Places({ data }) {
  const [selected, setSelected] = useState(null)
  const items = [
    { title: "BALI", image: data.bali },
    { title: "CAMBODIA", image: data.cambodia },
    { title: "LAOS", image: data.laos },
    { title: "VIETNAM", image: data.vietnam },
    { title: "THAILAND", image: data.thailand },
  ]
  return (
    <>
      <SEO title="Places" />
      <section className="w-screen min-h-screen flex flex-col justify-evenly items-center">
        <AnimateSharedLayout type="crossfade">
          <h1
            className="palanquin-bold text-center text-4xl xs:text-5xl md:text-6xl text-gray-300 my-10 xl:my-0 px-1"
            style={{ letterSpacing: "0.3em" }}
          >
            SOUTH EAST ASIA
          </h1>
          <motion.div className="w-full flex flex-col xl:flex-row items-center justify-evenly">
            {items.map((item, i) => (
              <Place
                key={i}
                layoutId={item.title}
                name={item.title}
                imageSrc={getImage(item.image)}
                current={selected}
                select={setSelected}
              />
            ))}
            {/* <PlaceList
              key="bali"
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
            /> */}
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
