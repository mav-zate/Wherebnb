import { combineReducers } from 'redux';
import BnbsReducer from './bnbs_reducer';
import SessionReducer from './session_reducer';
import FilterReducer from './filter_reducer';
import ErrorsReducer from './errors_reducer';
import BookingsReducer from './bookings_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  bnbs: BnbsReducer,
  filters: FilterReducer,
  errors: ErrorsReducer,
  bookings: BookingsReducer,
});


export default rootReducer;
