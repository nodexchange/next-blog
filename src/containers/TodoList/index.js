import { connect } from 'react-redux'
import { addTodoAction, changeUsername } from './actions'
import TodoList from './TodoList'

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onTodoClick: (evt) => dispatch(onTodoClick(evt.target.value)),
  addTodoClick: (value) => dispatch(addTodoAction(value))
})

const mapStateToProps = (state) => {
  const todos = state.todos.toJS();
  return {
    todos: todos.data,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const TodoListConnected = withConnect(TodoList)
export default TodoListConnected