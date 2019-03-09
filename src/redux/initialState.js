import { fromJS } from 'immutable'

const initialState = fromJS({
  add: {},
  timer: {},
  todos: [
    {
      id:0,
      completed: false,
      text: 'My static todo'
    }
  ]
});

export default initialState