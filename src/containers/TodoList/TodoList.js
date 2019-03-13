import PropTypes from 'prop-types'
import { Todo } from '../../components'
import { AddTodo } from '../../components'


import { addTodoAction } from './actions'

const TodoList = ({ todos, onTodoClick, addTodoClick }) => (
  <div>
    <AddTodo addTodoAction={addTodoClick} />
    <ul>
      { 
        todos ?
          todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
          ))
        : <div>TODOS NOT CONNECTED</div>
      }
    </ul>
  </div>
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

export default TodoList