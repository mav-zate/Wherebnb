import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const user = 'user';
    if (this.props.currentUser) {
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
