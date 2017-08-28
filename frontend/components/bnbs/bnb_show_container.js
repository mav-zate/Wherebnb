import { connect } from 'react-redux';
import BnbShow from './bnb_show';
import { requestSingleBnb } from '../../actions/bnb_actions';


const mapStateToProps = ({bnbs}) => {
  return {
    bnbs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleBnb: (bnbId) => dispatch(requestSingleBnb(bnbId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BnbShow);
