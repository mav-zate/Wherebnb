import React from 'react';
import BnbIndex from '../bnbs/bnb_index';
import BnbMap from '../map/bnb_map'

const Search = ({bnbs, requestAllBnbs}) => {
  return (
    <div id="search-container">
      <BnbIndex bnbs={bnbs} requestAllBnbs={requestAllBnbs}/>
      <BnbMap />
    </div>
  );
};


export default Search;
