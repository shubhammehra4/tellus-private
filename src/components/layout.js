import React from "react"
import PropTypes from "prop-types"
import { ContextProvider } from "../context/Context"
import "../styles/global.css"
import "../styles/custom.css"
import Transition from "./transition"

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
