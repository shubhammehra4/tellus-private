import React, { useState, useEffect } from "react"
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
            onClick={() => alert(JSON.stringify(state, null, 4))}
            className="w-44 h-16 bg-gray-500 text-white lato"
          >
            I'M IN
          </button>
        </section>
        <>
          <FinalSlides state={state} setState={setState} />
          <button
            onClick={() => alert(JSON.stringify(state, null, 4))}
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
    </>
  )
}

export default Final
