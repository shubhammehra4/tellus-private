import React from "react"
import SEO from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function IndianSubcontinent() {
  return (
    <>
      <SEO title="INDIAN SUBCONTINENT" />
      <section className="w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto">
        <h1 className="palanquin-bold text-center text-4xl xs:text-5xl lg:text-6xl tracking-widest text-gray-700 my-10 lg:my-0 px-1">
          INDIAN SUBCONTINENT
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly">
          <Link className="country-link" to="/indian-subcontinent/india/">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../../images/india-1.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-white text-4xl tracking-widest">
                  INDIA
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/indian-subcontinent/sri-lanka/">
            <div className="country grid w-4/5 max-w-sm m-10 md:m-6">
              <StaticImage
                src="../../images/sri-lanka-1.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-white text-center text-4xl tracking-wider text-shadow">
                  SRI LANKA
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/indian-subcontinent/nepal/">
            <div className="country grid w-4/5 max-w-sm m-10 md:m-6">
              <StaticImage
                src="../../images/nepal-1.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-4xl tracking-widest text-white">
                  NEPAL
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/indian-subcontinent/bhutan/">
            <div className="country grid w-4/5 max-w-sm m-10 md:m-6">
              <StaticImage
                src="../../images/bhutan-1.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-4xl tracking-widest text-white">
                  BHUTAN
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default IndianSubcontinent
