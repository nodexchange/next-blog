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
import { SET_VISIBILITY_FILTER } from './constants'

export default (initialState) => {
  const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }
  return visibilityFilter
}
