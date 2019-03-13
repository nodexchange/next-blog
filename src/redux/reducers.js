import { combineReducers } from 'redux'
import TimerReducer from '../containers/Timer/reducer'
import TodoListReducer from '../containers/TodoList/reducer'

const rootReducer = combineReducers({
  timer: TimerReducer,
  todos: TodoListReducer
});

export default rootReducer
