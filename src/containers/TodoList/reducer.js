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
import { fromJS } from 'immutable'

import { TOGGLE_TODO } from './constants'

const initialState = fromJS({
  todos: [
    {
      id:0,
      completed: false,
      text: 'My static todo'
    }
  ]
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
