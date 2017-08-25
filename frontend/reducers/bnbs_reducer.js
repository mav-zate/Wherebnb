import { RECEIVE_ALL_BNBS } from '../actions/bnb_actions';


const BnbsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BNBS:
      newState = action.bnbs;
      return newState;
    default:
    return state;
  }
};


export default BnbsReducer;
