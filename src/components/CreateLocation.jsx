import React from 'react'
import { shape, func } from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addLocation } from '../actions/locations'

class CreateLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    // alert(`A name was submitted:  + ${this.state.value}`)
    this.props.addLocation(this.state.value)
    this.props.history.push('/locations')
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Name:
          <input id="title" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

CreateLocation.propTypes = {
  addLocation: func.isRequired,
  history: shape({ push: func }).isRequired
}

export default withRouter(connect(
  null,
  { addLocation }
)(CreateLocation))

