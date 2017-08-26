import { connect } from 'react-redux';
import  Search from '../search/search';
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


export default connect(mapStateToProps, mapDispatchToProps)(Search);
