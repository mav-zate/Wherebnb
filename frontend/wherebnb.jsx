import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Let there be light</h1>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;

// $.ajax({
//   email: 'calvin@gmail.com',
//   first_name: 'Calvin',
//   last_name: 'Jee',
//   password: 'password',
//   language: 'English',
//   country: 'United States',
// })


// update state to include session slice
