import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const _defaultState = {
  currentUser: null,
  errors: [],
};


const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, action.currentUser);
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
