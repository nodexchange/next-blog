import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable'

import rootReducer from '../containers/reducers'

// The initial state of the App
// const initialState = fromJS({
//   add: {},
//   timer: {}
// });

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
}

export const initStore = (state = {}) => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}