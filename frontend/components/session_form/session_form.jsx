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
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === 'signup') {
      user = Object.assign({}, this.state);
    } else {
      user = {};
      user.email = this.state.email;
      user.password = this.state.password;
    }
    debugger
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
        <label>first name:
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            />
        </label>
      );
    }
  }

  lastName(formType) {
    if (formType === 'signup') {
      return (
        <label>last name:
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            />
        </label>
      );
    }
  }


  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/"/>;
    }
    return(
      <div>
        <h1>Welcome to Benchbnb!</h1>

        <p className="errors">{this.props.errors}</p>
        <p> {this.props.formType}, or  {this.notFormType(this.props.formType)}</p>
        <form onSubmit={this.handleSubmit}>

          <label>email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              />
          </label>

          <div>{this.firstName(this.props.formType)}</div>
          <div>{this.lastName(this.props.formType)}</div>

          <label>password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}


export default SessionForm;
