import avatar from './logo.png'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Todo } from '../../components'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
)

const mapStateToProps = state => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const ConnectedHelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ConnectedHelloWorld