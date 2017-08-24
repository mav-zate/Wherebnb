import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notFormType = this.notFormType.bind(this);
    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this);
    this.welcomeMessage = this.welcomeMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.footerMessage = this.footerMessage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === 'signup') {
      user = {};
      user.email = this.state.email;
      user.password = this.state.password;
      user.first_name = this.state.first_name;
      user.last_name = this.state.first_name;
    } else {
      user = {};
      user.email = this.state.email;
      user.password = this.state.password;
    }
    this.props.processForm(user);
  }

  willReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  notFormType(formType) {
    if (formType === 'login') {
      return (<Link to="/signup">Sign up</Link>);
    } else {
      return (<Link to="/login">Log in</Link>);
    }
  }

  firstName(formType) {
    if (formType === 'signup') {
      return (
        <input
          type="text"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          placeholder="First Name"
          className="auth-input"
          />
      );
    }
  }

  lastName(formType) {
    if (formType === 'signup') {
      return (
        <input
          type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          placeholder="Last Name"
          className="auth-input"
          />
      );
    }
  }

  welcomeMessage(formType) {
    if (formType === 'login') {
      return (<h1>Log in to continue</h1>);
    }
  }

  submitMessage(formType) {
    return (formType === 'login') ? 'Log in' : 'Sign up';
  }

  footerMessage(formType) {
    if (formType === 'login') {
      return (
        <span className="session-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      );
    } else {
      return (
        <span className="session-footer">
          Already have a Wherebnb account? <Link to="/login">Log in</Link>
        </span>
      );
    }
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/"/>;
    }
    return(
      <div>
        <div id="login-message">
          {this.welcomeMessage(this.props.formType)}
        </div>

        <p className="errors">{this.props.errors}</p>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email Address"
              className="auth-input"
              />
          </div>

          <div>
            {this.firstName(this.props.formType)}
          </div>

          <div>
            {this.lastName(this.props.formType)}
          </div>

          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="auth-input"
              />
          </div>

          <input
            id="session-form-button"
            type="submit"
            value={this.submitMessage(this.props.formType)}
            />
        </form>

        <div id="session-form-footer">
          {this.footerMessage(this.props.formType)}
        </div>
      </div>
    );
  }
}


export default SessionForm;
