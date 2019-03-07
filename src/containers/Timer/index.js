import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import reducer from './reducer';
import TodoList from './TodoList';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  }
});

const mapStateToProps = () => {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'TodoList', reducer });

export default compose(withReducer, withConnect)(TodoList);
export { mapDispatchToProps };