import React from 'react';
import BnbIndex from '../bnbs/index/bnb_index';
import BnbMap from '../map/bnb_map';
import FilterForm from '../filter/filter_form';

const Search = ({bnbs, requestAllBnbs, updateFilter}) => {
  return (
    <div id="search-container">
      <div id="form-index-container">
        <FilterForm updateFilter={updateFilter}/>
        <BnbIndex bnbs={bnbs} requestAllBnbs={requestAllBnbs}/>
      </div>
      <BnbMap bnbs={bnbs} updateFilter={updateFilter}/>
    </div>
  );
};


export default Search;
