import * as APIUtil from '../util/bnb_api_util';


// action type constants
export const RECEIVE_ALL_BNBS = 'RECEIVE_ALL_BNBS';

export const RECEIVE_SINGLE_BNB = 'RECEIVE_SINGLE_BNB';


// action creators
export const receiveAllBnbs = (bnbs) => {
  return {
    type: RECEIVE_ALL_BNBS,
    bnbs
  };
};

export const receiveSingleBnb = (bnb) => {
  return {
    type: RECEIVE_SINGLE_BNB,
    bnb,
  };
};


// thunk action creators
export const requestAllBnbs = (filters) => (dispatch) => {
  return APIUtil.fetchAllBnbs(filters)
    .then((bnbs) => dispatch(receiveAllBnbs(bnbs)));
};

export const requestSingleBnb = (bnbId) => (dispatch) => {
  return APIUtil.fetchSingleBnb(bnbId)
    .then((bnb) => dispatch(receiveSingleBnb(bnb)));
};
