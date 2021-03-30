import React, { useState, createContext, useContext } from "react"

export const isBrowser = () => typeof window !== "undefined"

const getLocalStorage = () =>
  isBrowser() && window.localStorage.getItem("auth")
    ? window.localStorage.getItem("auth")
    : false

const setLocalStorage = () => window.localStorage.setItem("auth", true)

export const Context = createContext()
const { Provider } = Context

export function useAuth() {
  return useContext(Context)
}

export function ContextProvider({ children }) {
  const [auth, setAuth] = useState(getLocalStorage)

  const validateAuth = password => {
    if (password === "karndesigner") {
      setLocalStorage()
      setAuth(true)
    }
  }
  const value = { auth, validateAuth }

  return <Provider value={value}>{children}</Provider>
}
