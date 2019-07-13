import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./home.scss"
import camera from "../../images/camera.png"
import books from "../../images/books.png"
import keys from "../../images/keys.png"

const Home = () => (
  <section className="home">
    <div className="left">
      <img className="books" alt="books" src={ books } />
      <img className="keys" alt="keys" src={ keys } />
      <img className="camera" alt="camera" src={ camera } />
    </div>
    <div className="right">
      <div className="textBlock">
        <h1>ALLISON</h1>
        <h1 className="surname">TOWEY</h1>
      </div>
    </div>
  </section>
)

export default Home
