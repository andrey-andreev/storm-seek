import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/spots">Spots</NavLink>
    <NavLink to="/create_spot">Add spot</NavLink>
  </div>
)

export default Navigation

