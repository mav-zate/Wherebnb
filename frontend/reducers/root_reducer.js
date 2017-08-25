import { combineReducers } from 'redux';
import BnbsReducer from './bnbs_reducer';
import SessionReducer from './session_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  bnbs: BnbsReducer,
});


export default rootReducer;
