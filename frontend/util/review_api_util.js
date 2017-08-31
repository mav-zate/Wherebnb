export const postReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review,
  });
};

export const fetchBnbReviews = (bnbId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: {
      review: {
        bnb_id: bnbId,
      }
    }
  });
};
