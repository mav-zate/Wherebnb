import * as APIUtil from '../util/booking_api_util';


// action type constants
export const RECEIVE_SINGLE_BOOKING = 'RECEIVE_SINGLE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';


// action creators
export const receiveSingleBooking = (booking) => {
  return {
    type: RECEIVE_SINGLE_BOOKING,
    booking,
  };
};

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors,
  };
};


// action thunk creators
export const createBooking = (booking) => (dispatch) => {
  APIUtil.postBooking(booking).then(data => console.log(data)
    // savedBooking => {
    // dispatch(receiveSingleBooking(savedBooking));
    // return savedBooking;
  ).fail(err => dispatch(receiveBookingErrors(err.responseJSON)));
};
