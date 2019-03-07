import { combineReducers } from 'redux'
import AddTodo from './AddTodo/reducer'
import TimerReducer from './Timer/reducer'
// import TodoFilterReducer from './TodoFilter/reducer'
// import TodoListReducer from './TodoList/reducer'

const rootReducer = combineReducers({
  add: AddTodo,
  timer: TimerReducer
});

export default rootReducer
