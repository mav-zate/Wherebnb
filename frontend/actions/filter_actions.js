import { requestAllBnbs } from './bnb_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';


// action creators
export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_BOUNDS,
    filter,
    value,
  };
};


// thunk action creators
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return requestAllBnbs(getState().filters)(dispatch);
};
