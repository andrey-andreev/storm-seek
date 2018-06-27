import { createStore } from 'redux'

import reducers from './reducers/reducers'
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState()
const store = createStore(
  reducers,
  persistedState
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
