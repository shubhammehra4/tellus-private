import React, { useState } from "react"
import FinalList from "../components/FinalList"
import FinalSlides from "../components/finalSlides"
import SEO from "../components/seo"

function Final() {
  const [state, setState] = useState({
    pace: null,
    interest: null,
    personality: null,
    activity: null,
  })
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <SEO title="ABOUT YOU" />
      <section className="w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto">
        <h1 className="palanquin-bold text-center text-4xl xs:text-5xl lg:text-6xl tracking-widest text-gray-300 px-1 mt-10">
          <span className="text-gray-800">TELLUS</span> ABOUT YOU
        </h1>
        <section className="w-screen flex-grow hidden md:flex flex-col items-center justify-evenly mx-auto ">
          <FinalList state={state} setState={setState} />
          <button
            disabled={
              (state.activity &&
                state.pace &&
                state.personality &&
                state.interest) === null
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
          id="modal"
          className="fixed w-screen h-screen inset-0 overflow-hidden flex justify-center items-center animated fadeIn faster"
          style={{ background: "rgba(0,0,0,.6)" }}
        >
          <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Header</p>
                <div className="modal-close cursor-pointer z-50">
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              <div className="my-5">
                <p>{JSON.stringify(state, null, 4)}</p>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="focus:outline-none modal-close px-4 bg-gray-400 p-3 text-black hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 hover:bg-teal-400">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Final
