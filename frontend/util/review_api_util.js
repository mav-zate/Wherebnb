export const postReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review,
  });
};
