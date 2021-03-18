import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { Context } from "../../context/Context"
import SEO from "../../components/seo"

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
      <section>Hello</section>
    </>
  )
}
export default Countries
