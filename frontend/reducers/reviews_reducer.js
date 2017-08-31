import { RECEIVE_SINGLE_REVIEW } from '../actions/review_actions';


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_REVIEW:
      newState = Object.assign({}, state, action.review);
      return newState;
    default:
      return state;
  }
};


export default ReviewsReducer;
