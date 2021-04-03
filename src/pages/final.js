import React, { useState, useRef } from "react"
import FinalList from "../components/FinalList"
import FinalSlides from "../components/finalSlides"
import SEO from "../components/seo"

function Final() {
  const [state, setState] = useState({
    pace: null,
    interest: null,
    personality: null,
    activity: null,
    days: null,
  })
  const [showModal, setShowModal] = useState(false)
  const email = useRef("")
  const name = useRef("")

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const handleSubmit = e => {
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
    alert(JSON.stringify({ nameVal, emailVal }))
    setShowModal(false)
  }

  return (
    <>
      <SEO title="ABOUT YOU" />
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
                state.interest) === null
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
          <div className="shadow-lg bg-white w-11/12 md:max-w-xl mx-auto z-50 overflow-y-auto py-4 px-6 md:pt-14 md:pb-8">
            <div className="relative flex justify-center items-center md:pb-3 w-full">
              <h1 className="palanquin-bold text-center text-3xl md:text-5xl text-gray-800">
                TELL US <span className="text-gray-400">YOUR</span>
              </h1>
              <button
                className="absolute top-0 right-0 z-50 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
            <form className="w-full my-4 md:my-10 flex flex-col justify-center items-center">
              <label
                htmlFor="name"
                className="palanquin-bold text-center text-2xl md:text-3xl text-gray-800 my-4 md:my-6"
              >
                NAME
              </label>
              <input
                id="name"
                className="w-5/6 border-b-2 border-gray-400 outline-none text-center focus:border-blue-600"
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
                className="w-5/6 border-b-2 border-gray-400 outline-none text-center focus:border-blue-600"
                ref={email}
              />
            </form>
            <div className="flex justify-between">
              <button
                className="h-12 w-24 bg-gray-600 text-white  focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                CLOSE
              </button>
              <button
                className="h-12 w-24 bg-gray-800 text-white  focus:outline-none"
                onClick={handleSubmit}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Final
