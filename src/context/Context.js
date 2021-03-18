import React, { useState, createContext } from "react"

export const Context = createContext()
const { Provider } = Context

export function ContextProvider({ children }) {
  const [auth, setAuth] = useState(false)

  const validateAuth = password => {
    if (password === "karndesigner") {
      setAuth(true)
    }
  }
  const value = { auth, validateAuth }

  return <Provider value={value}>{children}</Provider>
}
