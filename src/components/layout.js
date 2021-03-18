import React from "react"
import PropTypes from "prop-types"
import { ContextProvider } from "../context/Context"
import { motion } from "framer-motion"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <motion.main
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.4,
        }}
      >
        {children}
      </motion.main>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
