import { connect } from 'react-redux';
import { changeUsername } from './actions';
import TodoFilter from './TodoFilter';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  }
});

const mapStateToProps = () => {};

const TodoFilterConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter)

export default TodoFilterConnected