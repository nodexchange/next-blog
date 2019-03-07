import { combineReducers } from 'redux'
import todos from '../containers/TodoFilter/reducer'
import visibilityFilter from '../containers/TodoList/reducer'

export default combineReducers({
  todos,
  visibilityFilter
})