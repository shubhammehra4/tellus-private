import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { Context } from "../context/Context"
import SEO from "../components/seo"

const Countries = () => {
  const { auth } = useContext(Context)
  useEffect(() => {
    if (!auth) {
      navigate(`/`)
    }
  }, [auth])

  return (
    <>
      <SEO title="Countries" />
      <section className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-evenly mx-auto">
        <div className="place relative w-4/5 max-w-sm m-6">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            alt="India"
          />
          <span className="place-name absolute text-center w-full text-white">
            INDIA
          </span>
        </div>
        <div className="place relative w-4/5 max-w-sm m-6">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            alt="India"
          />
          <span className="place-name absolute text-center w-full text-white">
            INDIA
          </span>
        </div>
        <div className="place relative w-4/5 max-w-sm m-6">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            alt="India"
          />
          <span className="place-name absolute text-center w-full text-white">
            INDIA
          </span>
        </div>
      </section>
    </>
  )
}
export default Countries
