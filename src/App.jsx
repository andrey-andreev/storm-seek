import React, { Fragment } from 'react'
import { shape } from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import logo from './logo.svg'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Spots from './components/Spots'
import CreateSpot from './components/CreateSpot'

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/spots" component={Spots} />
          <Route path="/create_spot" component={CreateSpot} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
)

App.propTypes = {
  store: shape({}).isRequired
}

export default App
