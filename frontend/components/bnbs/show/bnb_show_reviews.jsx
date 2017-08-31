import React from 'react';
import ReviewForm from '../../reviews/review_form';


const BnbShowReviews = ({reviews, createReview, bnb, session}) => {
  return (
    <div className="show-panel">
      <div className="show-panel-title">
        {reviews.length} Reviews
      </div>
      {reviews.map(rev => (
        <li key={rev.id}>
          {rev.body}
        </li>
      ))}
      <ReviewForm
        createReview={createReview}
        bnb={bnb}
        session={session}/>
    </div>
  );
};


export default BnbShowReviews;
