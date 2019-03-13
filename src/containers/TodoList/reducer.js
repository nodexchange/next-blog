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

import { Map, List } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  isLoading: false,
  data: List([{
    id:0,
    completed: false,
    text: 'My initial todo'
  }]),
  error: null,
});


const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case actionTypes.ADD_TODO:
      const newItem = {
        id: action.id,
        text: action.text,
        completed: false
      }
      return state.update('data', (list) => list.push(newItem))
    default:
      return state
  }
}

// export default handleActions({
//   [actionTypes.GET_DATA]: state => state
//     .set('isLoading', true),
//   [actionTypes.SET_DATA]: (state, { payload }) => state
//     .set('isLoading', false)
//     .set('data', fromJS(payload))
//     .set('error', null),
//   [actionTypes.SET_ERROR]: (state, { payload }) => state
//     .set('isLoading', false)
//     .set('data', null)
//     .set('error', fromJS(payload)),
// }, defaultState);

export default todosReducer
