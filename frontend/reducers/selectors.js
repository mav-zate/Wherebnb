import { values } from 'lodash';

export const selectAllBnbs = ({bnbs}) => {
  return _.values(bnbs);
};

export const selectBnbReviews = ({reviews}) => {
  return _.values(reviews);
};
