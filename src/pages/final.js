import { AnimateSharedLayout, motion } from "framer-motion"
import { navigate } from "gatsby-link"
import React, { useState, useRef } from "react"
import FinalList from "../components/FinalList"
import FinalSlides from "../components/finalSlides"
import SEO from "../components/seo"
import { GrClose } from "react-icons/gr"
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { Link } from "gatsby"

function Final({ location }) {
  const [state, setState] = useState({
    pace: null,
    interest: null,
    personality: null,
    activity: null,
    days: null,
  })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const email = useRef("")
  const name = useRef("")
  let destination = ""
  if (location.state) {
    destination = location.state.value
  }

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const handleSubmit = async () => {
    const nameVal = name.current.value
    const emailVal = email.current.value
    email.current.style.borderColor = "rgba(156, 163, 175,1)"
    if (!nameVal) {
      name.current.focus()
      return
    }
    if (!emailVal) {
      email.current.focus()
      return
    }
    if (!validateEmail(emailVal)) {
      email.current.style.borderColor = "red"
      email.current.focus()
      return
    }
    setLoading(true)
    try {
      var res = await fetch("https://2lcrs6.deta.dev/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          ...state,
        }),
      })
    } catch (err) {
      console.log(err)
      return
    }
    console.log(res.json())
    setLoading(false)
    setSuccess(true)
  }

  if (!destination && typeof window !== "undefined") {
    navigate("/destination/")
  }

  return (
    <>
      <SEO title="ABOUT YOU" />
      <AnimateSharedLayout>
        <section className="w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto">
          <h1 className="palanquin-bold text-center text-4xl xs:text-5xl lg:text-6xl tracking-widest text-gray-300 px-1 mt-10">
            <span className="text-gray-800">TELLUS</span> ABOUT
          </h1>
          <section className="w-screen flex-grow hidden md:flex flex-col items-center justify-evenly mx-auto ">
            <FinalList state={state} setState={setState} />
            <button
              disabled={
                (state.activity &&
                  state.pace &&
                  state.personality &&
                  state.interest &&
                  state.days) === null
              }
              onClick={() => setShowModal(true)}
              className="w-44 h-16 bg-gray-500 text-white lato"
            >
              I'M IN
            </button>
          </section>
          <>
            <FinalSlides state={state} setState={setState} />
            <button
              onClick={() => setShowModal(true)}
              className={
                (state.activity &&
                  state.pace &&
                  state.personality &&
                  state.interest &&
                  state.days) === null
                  ? `w-32 h-12 mb-4 opacity-0 md:hidden`
                  : `w-32 h-12 bg-gray-500 text-white lato mb-4 md:hidden`
              }
            >
              I'M IN
            </button>
          </>
        </section>
        {showModal && (
          <section
            className="fixed z-10 w-screen h-screen inset-0 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: "rgba(0,0,0,.6)" }}
          >
            {!success ? (
              <motion.div
                layoutId="box"
                className="shadow-lg bg-white w-11/12 md:max-w-xl mx-auto z-50 overflow-y-auto pt-2 md:pb-8"
              >
                <div className="relative flex justify-center items-center pb-4 md:pb-2 w-full">
                  <h1 className="palanquin-bold text-center text-4xl md:text-5xl text-gray-800 pt-6 pb-4">
                    TELLUS <span className="text-gray-400">YOUR</span>
                  </h1>
                  <button
                    className="absolute top-0 right-3 z-50 focus:outline-none text-gray-600 hover:text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <GrClose />
                  </button>
                </div>
                <form className="w-full mb-4 mt-2 md:my-8 flex flex-col justify-center items-center">
                  <label
                    htmlFor="name"
                    className="palanquin-bold text-center text-2xl md:text-3xl text-gray-800 my-4 md:my-6 focus:text-indigo-800"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    className="w-5/6 md:w-2/3 border-b-2 border-gray-400 outline-none text-center focus:border-blue-600"
                    ref={name}
                  />
                  <label
                    htmlFor="email"
                    className="palanquin-bold text-center text-2xl md:text-3xl text-gray-800 my-4 md:my-6"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-5/6 md:w-2/3 border-b-2 border-gray-400 outline-none text-center focus:border-blue-600"
                    ref={email}
                  />
                </form>
                <div className="flex justify-between px-6 pb-4 pt-6">
                  <button
                    className="h-12 w-24 bg-gray-600 text-white focus:outline-none hover:bg-gray-700"
                    onClick={() => setShowModal(false)}
                  >
                    CLOSE
                  </button>
                  <motion.button
                    layoutId="success"
                    className="h-12 w-28 bg-gray-800 text-white focus:outline-none hover:bg-green-500 transition-all duration-500 ease-in-out flex justify-center items-center"
                    onClick={handleSubmit}
                  >
                    {loading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                    CONFIRM
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                layoutId="box"
                className="shadow-lg bg-green-500 h-1/2 w-11/12 md:max-w-xl mx-auto z-50 overflow-y-auto pt-2 md:pb-8 flex"
              >
                <div className="flex flex-col justify-center items-center md:pb-2 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <IoCheckmarkDoneCircleOutline className="text-6xl text-white animate-bounce" />
                  </motion.div>
                  <motion.div
                    layoutId="success"
                    className="flex justify-between px-6"
                  >
                    <motion.h1 className="text-white text-6xl my-8">
                      SUCCESS
                    </motion.h1>
                  </motion.div>
                  <motion.p className="text-xl text-white">
                    Please Check Your Email
                  </motion.p>
                  <Link to="/destination/">
                    <motion.button className="mt-6 px-4 py-2 bg-green-800 hover:bg-green-900 focus:outline-none text-white">
                      Home
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </section>
        )}
      </AnimateSharedLayout>
    </>
  )
}

export default Final
