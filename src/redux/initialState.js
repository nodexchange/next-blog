import { fromJS } from 'immutable'

const initialState = fromJS({
  todos: {
    list: [
      {
        id:0,
        completed: false,
        text: 'My initial todo'
      }
    ]
  }
});

export default initialState