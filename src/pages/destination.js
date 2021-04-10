import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useAuth } from "../context/Context"
import { BiLoaderCircle } from "react-icons/bi"

const Countries = () => {
  const { auth } = useAuth()
  useEffect(() => {
    if (!auth) {
      navigate(`/`)
    }
  }, [auth])

  if (!auth) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <BiLoaderCircle className="animate-spin h-28 w-14 text-indigo-600" />
      </div>
    )
  }

  return (
    <>
      <SEO title="DESTINATION" />
      <section className="w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto">
        <h1 className="palanquin-bold text-center text-4xl xs:text-5xl lg:text-6xl tracking-widest text-gray-300 my-10 lg:my-0 px-1">
          <span className="text-gray-800">TELLUS</span> YOUR DESTINATION
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly">
          <Link className="country-link" to="/indian-subcontinent/">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/india-main.jpg"
                alt="Indian Subcontinent"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={600}
                height={600}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-white text-4xl tracking-widest text-center">
                  INDIAN SUBCONTINENT
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/south-east-asia/">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/south-east-asia-main.jpg"
                alt="South East Asia"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={600}
                height={600}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-white text-center text-4xl tracking-wider text-shadow">
                  SOUTH <span className="text-red-800">EAST ASIA</span>
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/china/">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/china-main.jpg"
                alt="China"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={600}
                height={600}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-4xl tracking-widest text-red-600">
                  CHINA
                </h1>
              </div>
            </div>
          </Link>
          <Link className="country-link" to="/mongolia/">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/mongolia-1.jpg"
                alt="Mongolia"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={600}
                height={600}
              />
              <div
                className="relative place-items-center grid"
                style={{
                  gridArea: "1/1",
                }}
              >
                <h1 className="country-name palanquin-bold text-4xl tracking-widest text-white">
                  MONGOLIA
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
export default Countries
