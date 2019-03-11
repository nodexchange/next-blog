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
import { TOGGLE_TODO } from './constants'

export default (initialState) => {
  const todosReducer = (state = initialState.get('todos'), action) => {
    switch (action.type) {
      case TOGGLE_TODO:
        console.log('togle')
        // return state.map(todo =>
        //   todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        // )
      default:
        return state
    }
  }
  return todosReducer
}
