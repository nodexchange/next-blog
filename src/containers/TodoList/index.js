import { connect } from 'react-redux'
import { changeUsername } from './actions'
import TodoList from './TodoList'

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onTodoClick: (evt) => dispatch(onTodoClick(evt.target.value))
})

const mapStateToProps = (state) => {
  const todos = state.get('add').toJS();
  return {
    todos: todos.list,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const TodoListConnected = withConnect(TodoList)
export default TodoListConnected