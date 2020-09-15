import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">To Do</Link>
      <Link to="/Tasks">Tasks</Link>
      <form >
        <input type="text" placeholder="Find Task"/>
      </form>
    </div>
  )
}

export default Navbar
