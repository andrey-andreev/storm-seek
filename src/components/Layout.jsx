import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Locations from './Locations'
import CreateLocation from './CreateLocation'
import AddWebcam from './AddWebcam'

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
      <Route path="/locations" component={Locations} />
      <Route path="/create_location" component={CreateLocation} />
      <Route path="/add_webcam" component={AddWebcam} />
    </Switch>
    <Footer />
  </Fragment>
)

export default Layout
