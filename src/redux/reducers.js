<<<<<<< HEAD
import { combineReducers } from 'redux'
=======
import { combineReducers } from 'redux-immutable'
import addTodoReducer from '../containers/AddTodo/reducer'
>>>>>>> 9ffd86bbe1e82e73c59845f92bb7177c861c27d0
import TimerReducer from '../containers/Timer/reducer'
import TodoListReducer from '../containers/TodoList/reducer'

const rootReducer = combineReducers({
<<<<<<< HEAD
  timer: TimerReducer,
  todos: TodoListReducer
=======
  add: addTodoReducer(initialState),
  // timer: TimerReducer(initialState),
  todos: TodoListReducer(initialState)
>>>>>>> 9ffd86bbe1e82e73c59845f92bb7177c861c27d0
});

export default rootReducer
