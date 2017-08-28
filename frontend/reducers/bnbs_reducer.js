import { RECEIVE_ALL_BNBS, RECEIVE_SINGLE_BNB } from '../actions/bnb_actions';


const BnbsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BNBS:
      newState = action.bnbs;
      return newState;
    case RECEIVE_SINGLE_BNB:
      newState = Object.assign({}, state, action.bnb);
      return newState;
    default:
    return state;
  }
};


export default BnbsReducer;
