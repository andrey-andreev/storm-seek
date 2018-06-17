import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/reducers'

const store = createStore(reducers)

/* eslint-disable-next-line react/jsx-filename-extension */
ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker();
