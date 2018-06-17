import React from 'react'
import { shape } from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


import Layout from './components/Layout'

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
)

App.propTypes = {
  store: shape({}).isRequired
}

export default App
