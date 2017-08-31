import { RECEIVE_SINGLE_REVIEW, RECEIVE_BNB_REVIEWS } from '../actions/review_actions';


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_REVIEW:
      newState = Object.assign({}, state, action.review);
      return newState;
    case RECEIVE_BNB_REVIEWS:
      newState = action.reviews;
      return newState;
    default:
      return state;
  }
};


export default ReviewsReducer;
