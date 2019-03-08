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
import { ADD_TODO } from './constants'

/*
const reducer = (courses = initialState, action) => {
    courses = Immutable.fromJS(courses) // converting courses to an immutable object
    if (action.type == 'FETCHING_COURSES_SUCCESS') {
        return courses
            .set('status', 'success')
            .set('error', null)
            .set('items', action.items)
            .toJS() // returning usual JS object
    }
};
*/

const addTodoReducer = (state = [], action) => {
  console.log('>>> reducer', action.type);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default addTodoReducer
