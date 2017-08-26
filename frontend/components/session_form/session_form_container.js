import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ currentUser, session }) => {
  return {
    loggedIn: Boolean(currentUser),
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const _processForm = (formType === 'login') ? login : signup;
  return {
    formType,
    processForm: user => dispatch(_processForm(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
