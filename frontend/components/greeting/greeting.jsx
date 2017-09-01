import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session_form/session_form_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div id="greeting-logged-in">
            <button
              className="auth-button">
              <Link to="/bnbs">
                <div className="inner-auth">
                    Search
                </div>
              </Link>
            </button>
            <button
              className="auth-button"
              onClick={this.props.logout}>
                <div className="inner-auth">
                    Log out
                </div>
            </button>
            <img
              src={this.props.currentUser.profile_pic}
              id="current-user-image"/>
        </div>
      );
    } else {
      return (
        <div id="greeting-logged-out">
          <button className="auth-button">
            <Link to="/signup">
              <div className="inner-auth">
                  Sign up
              </div>
            </Link>
          </button>
          <br/>
          <button className="auth-button">
            <Link to="/login">
              <div className="inner-auth">
                  Log in
              </div>
            </Link>
          </button>
        </div>
      );
    }
  }
}


export default withRouter(Greeting);
