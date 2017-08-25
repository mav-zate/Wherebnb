import { connect } from 'react-redux';
import  BnbIndex from './bnb_index';
import { requestAllBnbs } from '../../actions/bnb_actions';
import { selectAllBnbs } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    bnbs: selectAllBnbs(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBnbs: () => dispatch(requestAllBnbs()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BnbIndex);
