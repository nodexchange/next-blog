import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable'

import rootReducer from '../containers/reducers'

// The initial state of the App
const initialState = fromJS({
  todos: [
    {
      id:0,
      completed: false,
      text: 'My static todo'
    }
  ]
});

export const initStore = (state = initialState) => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}