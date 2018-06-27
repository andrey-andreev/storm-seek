import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import store from './storeConfig'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
)

// App.propTypes = {
//   store: shape({}).isRequired
// }

export default App
