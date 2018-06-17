import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Spots from './Spots'
import CreateSpot from './CreateSpot'

// import logo from './logo.svg'

const Layout = () => (
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
)

export default Layout
