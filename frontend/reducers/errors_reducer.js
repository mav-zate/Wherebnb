import { RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';


const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};


export default ErrorsReducer;
