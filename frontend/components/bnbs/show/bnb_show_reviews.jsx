import React from 'react';


const BnbShowReviews = ({reviews}) => {
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
    </div>
  );
};


export default BnbShowReviews;
