import React from "react"
import { Link } from "gatsby"
// import { Context } from "../context/Context"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Countries = () => {
  // const { auth } = useContext(Context)
  // useEffect(() => {
  //   if (!auth) {
  //     navigate(`/`)
  //   }
  // }, [auth])

  return (
    <>
      <SEO title="Countries" />
      <section className="w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto">
        <h1 className="palanquin-bold text-center text-5xl lg:text-6xl tracking-widest text-gray-300 my-10 lg:my-0">
          <span className="text-gray-800">TELL US</span> YOUR DESTINATION
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly">
          <Link to="/India">
            <div className="country grid max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/india-main.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
                height={450}
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
          <Link to="/South-East-Asia">
            <div className="country grid w-4/5 max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/south-east-asia-main.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
                height={450}
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
          <Link to="/China">
            <div className="country grid w-4/5 max-w-sm m-10 md:m-6">
              <StaticImage
                src="../images/china-main.jpg"
                alt="India"
                placeholder="blurred"
                className="country-image h-full w-full"
                formats={["auto", "webp", "avif"]}
                width={450}
                height={450}
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
        </div>
      </section>
    </>
  )
}
export default Countries
