import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilter = Object.freeze({
  bounds: {},
  priceRange: {
    minPrice: 10,
    maxPrice: 100000,
  },
  roomType: {
    entireHome: true,
    privateRoom: true,
    sharedRoom: true,
  },
});


const FilterReducer = (state = defaultFilter, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case UPDATE_FILTER:
      newState = Object.assign({}, state, { [action.filter]: action.value});
      return newState;
    default:
    return state;
  }
};


export default FilterReducer;
