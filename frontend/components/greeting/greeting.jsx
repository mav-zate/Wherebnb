import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentUser: nextProps.currentUser});
  }

  render() {
    const user = 'user';
    if (this.state.currentUser) {
      return (
        <div id="greeting">
          <h1>Hello, {this.props.currentUser.first_name}</h1>
          <button onClick={logout}>Log out!</button>
        </div>
      );
    } else {
      return (
        <div id="greeting">
          <button><Link to="/signup">Sign up!</Link></button>
          <br/>
          <button><Link to="/login">Log in!</Link></button>
        </div>
      );
    }
  }
}


export default Greeting;
