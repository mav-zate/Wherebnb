import React from 'react';
import BnbIndex from '../bnbs/bnb_index';

const Search = ({bnbs, requestAllBnbs}) => {
  return (
    <div>
      <BnbIndex bnbs={bnbs} requestAllBnbs={requestAllBnbs}/>
    </div>
  );
};


export default Search;
