import { combineReducers } from 'redux'
import AddTodo from './AddTodo/reducer'
import TimerReducer from './Timer/reducer'
import TodoListReducer from './TodoList/reducer'
// import TodoFilterReducer from './TodoFilter/reducer'

const rootReducer = combineReducers({
  add: AddTodo,
  timer: TimerReducer,
  todos: TodoListReducer
});

export default rootReducer
