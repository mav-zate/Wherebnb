import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notFormType = this.notFormType.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  notFormType(formType) {
    if (formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log in </Link>;
    }
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/"/>;
    }
    return(
      <div>
        <h1>Welcome to Benchbnb!</h1>
        <p>{this.props.formType }, or {this.notFormType(this.props.formType)}</p>
        <p className="errors">{this.props.errors}</p>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <br/>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <br/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default SessionForm;
