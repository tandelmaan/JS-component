import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <Link to={'compony'}>Compony</Link>
      <Link to={'channel'}>Channel</Link>
      <Link to={'other'}>Other</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
