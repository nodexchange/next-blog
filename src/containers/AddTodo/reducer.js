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
export default (initialState) => {
  const addTodoReducer = (state = initialState.get('todos'), action) => {
    switch (action.type) {
      case ADD_TODO:
        // let list = state.get('list').toJS();
        console.log('>>> ADD_TODO', state.toJS());

        const newItem = {
          id: action.id,
          text: action.text,
          completed: false
        }
        state = state.update('list', todos => todos.push(newItem));

        // state = state.updateIn(['todos'], subList => {
        //   return subList.concat(newItem);
        // });
        console.log(state.toJS())
        return state
      default:
        return state
    }
  }
  return addTodoReducer
}