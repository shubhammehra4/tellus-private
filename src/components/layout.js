import React from "react"
import PropTypes from "prop-types"
import { ContextProvider } from "../context/Context"
import Transition from "./transition"
import "@fontsource/lato/400.css"
import "@fontsource/lato/700.css"
import "@fontsource/palanquin/100.css"
import "@fontsource/palanquin/700.css"
import "../styles/global.css"

const Layout = ({ children, location }) => {
  return (
    <Transition location={location}>
      <ContextProvider>
        <main>{children}</main>
      </ContextProvider>
    </Transition>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
