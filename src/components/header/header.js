import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="leftLinks">
      <a href="#">ABOUT ME</a>
      <a href="#">EDUCATION</a>
      <a href="#">WORK EXPERIENCE</a>
      <a href="#">PROJECTS</a>
      <a href="#">PHOTOGRAPHY</a>
    </div>
    <div className="rightLinks">
      <a href="#">GET IN TOUCH</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
