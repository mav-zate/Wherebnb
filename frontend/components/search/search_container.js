import { connect } from 'react-redux';
import  Search from '../search/search';
import { requestAllBnbs } from '../../actions/bnb_actions';
import { selectAllBnbs } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = (state) => {
  return {
    bnbs: selectAllBnbs(state),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBnbs: (filter) => dispatch(requestAllBnbs(filter)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
