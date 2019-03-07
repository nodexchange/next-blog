import { connect } from 'react-redux'
import { changeUsername } from './actions'
import AddTodo from './AddTodo'

// const mapDispatchToProps = (dispatch) => ({
//   onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//   onSubmitForm: (evt) => {
//     if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//     dispatch(loadRepos());
//   }
// });
const mapDispatchToProps = () => {}
const mapStateToProps = () => {}

// const AddTodoConnected = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddTodo)

const AddTodoConnected = connect()(AddTodo)

export default AddTodoConnected