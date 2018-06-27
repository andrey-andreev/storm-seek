import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { connect } from 'react-redux'

const Locations = ({ locations }) => (
  <div>
    Locations
    <ul>
      {locations.map(location => (<li key={location.title}>{location.title}</li>))}
    </ul>
  </div>
)

Locations.propTypes = {
  locations: arrayOf(shape({
    title: string
  })).isRequired
}

const mapStateToProps = state => ({
  locations: state.locations
})

export default connect(mapStateToProps)(Locations)

