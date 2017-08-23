import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session_form/session_form_container';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-70%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }


  render() {
    if (this.props.currentUser) {
      return (
        <div id="greeting">
          <h1>Hello, {this.props.currentUser.first_name}</h1>
          <button onClick={this.props.logout}>Log out!</button>
        </div>
      );
    } else {
      return (
        <div className="greeting">
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
