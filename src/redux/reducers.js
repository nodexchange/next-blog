import { combineReducers } from 'redux'
import addTodoReducer from '../containers/AddTodo/reducer'
import TimerReducer from '../containers/Timer/reducer'
import TodoListReducer from '../containers/TodoList/reducer'

import initialState from './initialState'

const rootReducer = combineReducers({
  add: addTodoReducer(initialState),
  timer: TimerReducer(initialState),
  todos: TodoListReducer(initialState)
});

export default rootReducer
