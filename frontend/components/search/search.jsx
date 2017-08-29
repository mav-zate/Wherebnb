import React from 'react';
import BnbIndex from '../bnbs/index/bnb_index';
import BnbMap from '../map/bnb_map';
import PriceFilterForm from '../filter/price_filter_form';
import RoomTypeFilterForm from '../filter/roomType_filter_form';

const Search = ({bnbs, requestAllBnbs, updateFilter}) => {
  return (
    <div id="search-container">
      <div id="form-index-container">
        <PriceFilterForm updateFilter={updateFilter}/>
        <RoomTypeFilterForm updateFilter={updateFilter}/>
        <BnbIndex bnbs={bnbs} requestAllBnbs={requestAllBnbs}/>
      </div>
      <BnbMap bnbs={bnbs} updateFilter={updateFilter}/>
    </div>
  );
};


export default Search;
