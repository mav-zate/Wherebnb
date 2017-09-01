import React from 'react';
import ReviewForm from '../../reviews/review_form';
import { values } from 'lodash';


class BnbShowReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let reviews = _.values(this.props.reviews);
    let bnb = this.props.bnb;
    let session = this.props.session;
    let createReview = this.props.createReview;

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
      <br/>
        <ReviewForm
          createReview={createReview}
          bnb={bnb}
          session={session}/>
      </div>
    );
  }
};


export default BnbShowReviews;
