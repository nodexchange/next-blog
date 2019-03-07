import React from 'react'
import avatar from './logo.png'
import PropTypes from 'prop-types'
import { Todo } from '../../components'

const TodoFilter = ({ todos, onTodoClick }) => (
  <ul>
    <li>I am filter container for now</li>
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoFilter