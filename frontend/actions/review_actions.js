import * as APIUtil from '../util/review_api_util';


export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


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


export const createReview = (review) => (dispatch) => {
  APIUtil.postReview(review).then(savedReview => {
    dispatch(receiveSingleReview(savedReview));
    return savedReview;
  }).fail(err => dispatch(receiveReviewErrors(err.responseJSON)));
};
