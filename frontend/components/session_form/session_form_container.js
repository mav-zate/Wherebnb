import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ currentUser, errors }) => {
  return {
    loggedIn: Boolean(currentUser),
    errors: errors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    formType,
    processForm: dispatch(processForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
