import React from 'react'
import PropTypes from 'prop-types'

let AddTodo = ({ addTodoAction }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          console.log(input.value)
          addTodoAction(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
}

export default AddTodo