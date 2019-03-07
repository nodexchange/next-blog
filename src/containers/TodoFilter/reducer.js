/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import { SET_VISIBILITY_FILTER } from './constants'
import { VisibilityFilters } from './actions'

// The initial state of the App
const initialState = fromJS({
  username: '',
  todos: []
});

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
