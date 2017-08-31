import { connect } from 'react-redux';
import BnbShow from './bnb_show';
import { requestSingleBnb } from '../../../actions/bnb_actions';
import { createReview, requestBnbReviews } from '../../../actions/review_actions';
import { selectBnbReviews } from '../../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    bnbs: state.bnbs,
    session: state.session,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleBnb: (bnbId) => dispatch(requestSingleBnb(bnbId)),
    createReview: (review) => dispatch(createReview(review)),
    requestBnbReviews: (bnbId) => dispatch(requestBnbReviews(bnbId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BnbShow);
