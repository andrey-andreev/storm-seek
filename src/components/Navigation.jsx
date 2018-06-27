import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/locations">Locations</NavLink>
    <NavLink to="/create_location">Add location</NavLink>
  </div>
)

export default Navigation

