import { UPDATE_BOUNDS } from '../actions/filter_actions';

const FilterReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case UPDATE_BOUNDS:
      newState = Object.assign({}, { [action.filter]: action.value});
      return newState;
    default:
    return state;
  }
};


export default FilterReducer;
