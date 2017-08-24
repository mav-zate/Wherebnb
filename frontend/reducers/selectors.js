import { values } from 'lodash';

export const selectAllBnbs = ({bnbs}) => {
  return _.values(bnbs);
};
