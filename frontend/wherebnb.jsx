import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test imports
import { signup, login, logout } from './actions/session_actions';
import { fetchAllBnbs } from './util/bnb_api_util';
import { requestAllBnbs, requestSingleBnb } from './actions/bnb_actions';
import { selectAllBnbs } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;
window.requestAllBnbs = requestAllBnbs;
window.selectAllBnbs = selectAllBnbs;
window.fetchAllBnbs = fetchAllBnbs;
window.requestSingleBnb = requestSingleBnb;

// $.ajax({
//   email: 'calvin@gmail.com',
//   first_name: 'Calvin',
//   last_name: 'Jee',
//   password: 'password',
//   language: 'English',
//   country: 'United States',
// })


// update state to include session slice
