import React from "react"
import SEO from "../../components/seo"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function PlaceBox({ name, imageSrc }) {
  return (
    <Link to="/">
      <div className="country grid max-w-xs my-8 xl:my-0">
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
          <h1 className="country-name text-white text-4xl tracking-widest">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default function Places({ data }) {
  return (
    <>
      <SEO title="Places" />
      <section className="w-screen min-h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-center text-7xl tracking-widest text-gray-300 my-10 xl:my-0">
          SOUTH EAST ASIA
        </h1>
        <div className="w-full flex flex-col xl:flex-row items-center justify-evenly">
          <PlaceBox name="BALI" imageSrc={getImage(data.bali)} />
          <PlaceBox name="CAMBODIA" imageSrc={getImage(data.cambodia)} />
          <PlaceBox name="LAOS" imageSrc={getImage(data.laos)} />
          <PlaceBox name="VIETNAM" imageSrc={getImage(data.vietnam)} />
          <PlaceBox name="THAILAND" imageSrc={getImage(data.thailand)} />
        </div>
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
          width: 350
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    cambodia: file(relativePath: { eq: "cambodia.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 350
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    laos: file(relativePath: { eq: "laos.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 350
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vietnam: file(relativePath: { eq: "vietnam.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 350
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    thailand: file(relativePath: { eq: "thailand.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 350
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
