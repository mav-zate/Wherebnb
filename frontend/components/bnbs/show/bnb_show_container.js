import { connect } from 'react-redux';
import BnbShow from './bnb_show';
import { requestSingleBnb } from '../../../actions/bnb_actions';
import { createReview } from '../../../actions/review_actions';


const mapStateToProps = ({bnbs, session}) => {
  return {
    bnbs,
    session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleBnb: (bnbId) => dispatch(requestSingleBnb(bnbId)),
    createReview: (review) => dispatch(createReview(review)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BnbShow);
