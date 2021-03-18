import React, { useRef, useContext, useState } from "react"
import { navigate } from "gatsby"
import { Context } from "../context/Context"

import SEO from "../components/seo"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"

const IndexPage = () => {
  const password = useRef()
  const [visible, setVisible] = useState(false)

  const { validateAuth } = useContext(Context)

  const handlePassword = async e => {
    e.preventDefault()
    if (password.current.value === "karndesigner") {
      await validateAuth(password.current.value)
      navigate(`/countries`)
    }
  }
  const togglePassword = e => {
    e.preventDefault()
    password.current.type =
      password.current.type === "text" ? "password" : "text"
    setVisible(prevState => !prevState)
  }

  return (
    <>
      <SEO title="Home" />
      <section className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="c-name text-xl md:text-5xl font-bold">TELLUS</h1>
        <p
          className="c-status text-3xl md:text-8xl font-extralight"
          style={{ color: "rgba(0, 0, 0, 0.3)" }}
        >
          PRIVATE
        </p>
        <form autoComplete="off" className="w-3/5 sm:w-2/5 lg:w-2/6 md:w-2/6">
          <div className="relative my-10 md:my-20 border-b-2 border-gray-300 focus-within:border-blue-800">
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" "
              ref={password}
              onChange={handlePassword}
              className="block w-full appearance-none focus:outline-none bg-transparent text-center"
            />
            <label
              htmlFor="password"
              className="text-center w-full absolute top-0 -z-1"
              style={{ color: "rgba(0, 0, 0, 0.3)" }}
            >
              PASSWORD
            </label>
            <button
              className="absolute top-0 right-1 z-10 cursor-pointer focus:outline-none focus:scale-105"
              onClick={togglePassword}
            >
              {visible ? (
                <BsEyeFill className="fill-current text-gray-400" />
              ) : (
                <BsEyeSlashFill className="fill-current text-gray-400" />
              )}
            </button>
          </div>
        </form>
        <footer className="absolute bottom-2 text-sm md:text-base text-center px-3">
          &copy; <strong>Tellus Travel</strong> |{" "}
          <address className="inline-block">
            353 avenue de la Basilique, 1081 Brussels – Belgium
          </address>{" "}
          |{" "}
          <a className="text-blue-400" href="mailto:info@tellus.be">
            info@tellus.be
          </a>{" "}
          |{" "}
          <a className="text-blue-400" href="tel:32 2 414 64 03">
            +32 2 414 64 03
          </a>
        </footer>
      </section>
    </>
  )
}

export default IndexPage
