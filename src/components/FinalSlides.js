import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Slide = ({ id, title, values, setState, state }) => (
  <>
    <section
      className="flex flex-col justify-evenly items-center"
      style={{
        height: "50vh",
      }}
    >
      <h2 className="palanquin-bold text-2xl xs:text-3xl lg:text-4xl tracking-widest text-gray-800">
        {title}
      </h2>
      {values.map((val, i) => {
        if (state[id] === val) {
          return (
            <button
              key={i}
              onClick={() => setState(prev => ({ ...prev, [id]: null }))}
              className="lato h-16 w-40 tracking-wider bg-gray-700 text-white"
            >
              {val}
            </button>
          )
        } else {
          return (
            <button
              key={i}
              onClick={() => setState(prev => ({ ...prev, [id]: val }))}
              className="lato h-16 w-40 bg-gray-300 tracking-wider hover:bg-black hover:text-white transition-all duration-300 ease-out focus:outline-none"
            >
              {val}
            </button>
          )
        }
      })}
    </section>
  </>
)
function FinalSlides({ state, setState }) {
  const [slide, setSlide] = useState(0)

  const next = () => {
    if (slide !== 3) {
      setSlide(prevSlide => prevSlide + 1)
    }
  }
  const prev = () => {
    if (slide !== 0) {
      setSlide(prevSlide => prevSlide - 1)
    }
  }

  const list = [
    {
      title: "THE PACE YOU LIKE",
      values: ["SLOW", "MEDIUM", "FAST"],
      id: "pace",
    },
    {
      title: "THINGS THAT INTEREST YOU",
      values: ["CULTURE", "PLACES", "PEOPLE"],
      id: "interest",
    },
    {
      title: "YOU CONSIDER YOURSELF",
      values: ["EXPLORER", "ADVENTURER", "RELAXED"],
      id: "personality",
    },
    {
      title: "ACTIVITIES YOU PREFER",
      values: ["WALKS", "EXPLORE", "GENERAL"],
      id: "activity",
    },
  ]

  return (
    <>
      <Carousel
        className="w-screen md:hidden"
        selectedItem={slide}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        showArrows={false}
        transitionTime={500}
        swipeable={false}
        showIndicators={false}
      >
        {list.map((ele, i) => (
          <Slide
            key={i}
            id={ele.id}
            title={ele.title}
            values={ele.values}
            setState={setState}
            state={state}
          />
        ))}
      </Carousel>
      <div className="flex items-center px-20 w-screen mb-8">
        <button
          disabled={slide > 0 ? false : true}
          className="lato h-12 w-28 bg-green-600 text-white mr-auto md:hidden"
          onClick={prev}
        >
          Previous
        </button>
        <button
          disabled={slide < 3 ? false : true}
          className="lato h-12 w-28 bg-blue-600 text-white ml-auto md:hidden"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default FinalSlides
