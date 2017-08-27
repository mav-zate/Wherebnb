import { combineReducers } from 'redux';
import BnbsReducer from './bnbs_reducer';
import SessionReducer from './session_reducer';
import FilterReducer from './filter_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  bnbs: BnbsReducer,
  filters: FilterReducer,
});


export default rootReducer;
