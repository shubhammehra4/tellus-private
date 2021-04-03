import React from "react"

function ListComponent({ id, title, values, state, setState }) {
  return (
    <>
      <h2 className="palanquin-bold text-3xl tracking-widest text-gray-800">
        {title}
      </h2>
      <div className="flex items-center justify-evenly w-3/5">
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
                className="lato h-16 w-40 bg-gray-300 tracking-wider hover:bg-black hover:text-white transition-all duration-300 ease-out focus:outline-none focus:bg-black focus:text-white"
              >
                {val}
              </button>
            )
          }
        })}
      </div>
    </>
  )
}

function FinalList({ state, setState }) {
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
    {
      title: "DAYS YOU HAVE",
      values: [5, 7, 12],
      id: "days",
    },
  ]
  return (
    <>
      {list.map((ele, i) => {
        return (
          <ListComponent
            key={i}
            id={ele.id}
            title={ele.title}
            values={ele.values}
            setState={setState}
            state={state}
          />
        )
      })}
    </>
  )
}

export default FinalList
