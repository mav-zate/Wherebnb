import * as APIUtil from '../util/review_api_util';


export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RECEIVE_BNB_REVIEWS = 'RECEIVE_BNB_REVIEWS';


export const receiveSingleReview = (review) => {
  return {
    type: RECEIVE_SINGLE_REVIEW,
    review,
  };
};

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  };
};

export const receiveBnbReviews = (reviews) => {
  return {
    type: RECEIVE_BNB_REVIEWS,
    reviews,
  };
};


export const createReview = (review) => (dispatch) => {
  APIUtil.postReview(review).then(savedReview => {
    dispatch(receiveSingleReview(savedReview));
    return savedReview;
  }).fail(err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const requestBnbReviews = (bnb_id) => (dispatch) => {
    return APIUtil.fetchBnbReviews(bnb_id)
      .then((reviews) => dispatch(receiveBnbReviews(reviews)));
};
