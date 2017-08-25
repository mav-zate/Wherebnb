import * as APIUtil from '../util/bnb_api_util';

// action types constants
export const RECEIVE_ALL_BNBS = 'RECEIVE_ALL_BNBS';


// action creators
export const receiveAllBnbs = (bnbs) => {
  return {
    type: RECEIVE_ALL_BNBS,
    bnbs
  };
};


// thunk action creators
export const requestAllBnbs = () => (dispatch) => {
  return APIUtil.fetchAllBnbs()
    .then((bnbs) => dispatch(receiveAllBnbs(bnbs)));
};
