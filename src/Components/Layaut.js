import React from 'react'

// -------- ------- ------ ----- Components ----- ------ ------- --------
import Navbar from './Navbar'
import Footer from './Footer'

function Layaut(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layaut
