import React, { useRef, useState } from "react"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { useAuth } from "../context/Context"

const IndexPage = () => {
  const password = useRef()
  const success = useRef()
  const [visible, setVisible] = useState(false)
  const { validateAuth } = useAuth()

  const handlePassword = e => {
    e.preventDefault()
    if (password.current.value === "karndesigner") {
      success.current.style.borderColor = "green"
      validateAuth(password.current.value)
      console.log(process.env.PASSWORD)
      navigate(`/countries`)
    } else if (password.current.value.length > 12) {
      success.current.style.borderColor = "red"
    } else {
      success.current.style.borderColor = "rgba(30,64,175,1)"
    }
  }
  const togglePassword = e => {
    e.preventDefault()
    password.current.type =
      password.current.type === "text" ? "password" : "text"
    setVisible(prevState => !prevState)
    password.current.focus()
  }

  return (
    <>
      <SEO title="Home" />
      <section className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="palanquin-bold absolute top-3 flex justify-between w-screen px-6 text-gray-500 underline tracking-widest">
          <Link to="/philosophy">PHILOSOPHY</Link>
          <Link to="/story">STORY</Link>
        </div>
        <h1 className="palanquin-bold c-name text-xl md:text-6xl">TELLUS</h1>
        <p
          className="palanquin-light c-status text-2xl sm:text-3xl md:text-8xl"
          style={{ color: "rgba(0, 0, 0, 0.4)" }}
        >
          PRIVATE
        </p>
        <form
          autoComplete="off"
          className="w-3/5 sm:w-2/5 lg:w-2/6 xl:w-1/4 md:w-2/5"
        >
          <div
            ref={success}
            className="relative my-10 md:my-20 border-b-2 border-gray-300 focus-within:border-blue-700"
          >
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
              style={{ color: "rgba(0, 0, 0, 0.4)" }}
            >
              PASSWORD
            </label>
            <button
              className="absolute top-0 right-1 z-10 text-gray-400 hover:text-gray-700 focus:outline-none focus:text-gray-900"
              onClick={togglePassword}
              title="toogle password"
              label="toggle password"
            >
              {visible ? (
                <BsEyeFill label="visible" className="fill-current" />
              ) : (
                <BsEyeSlashFill label="hidden" className="fill-current" />
              )}
            </button>
          </div>
        </form>
        <footer className="absolute bottom-2 text-sm md:text-base text-center px-3">
          &copy;Tellus Travel |{" "}
          <address className="inline-block">
            353 avenue de la Basilique, 1081 Brussels – Belgium
          </address>{" "}
          |{" "}
          <a
            className="text-blue-600 hover:underline focus:outline-none focus:underline focus:text-blue-800"
            href="mailto:info@tellus.be"
          >
            info@tellus.be
          </a>{" "}
          |{" "}
          <a
            className="text-blue-600 hover:underline focus:outline-none focus:underline focus:text-blue-800"
            href="tel:32 2 414 64 03"
          >
            +32 2 414 64 03
          </a>
        </footer>
      </section>
    </>
  )
}

export default IndexPage
