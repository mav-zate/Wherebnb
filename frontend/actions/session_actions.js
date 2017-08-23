import * as APIUtil from '../util/session_api_util';


// action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


// action creators
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};


// thunk action creators
export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(userData => dispatch(receiveCurrentUser(userData)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(userData => dispatch(receiveCurrentUser(userData)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
