import React from 'react';


const SEARCH_ICON = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/search_glass.png";


const SearchBar = () => {
  return (
    <div id="google-map-autocomplete-container">
      <div>
        <img
          src={SEARCH_ICON}/>
      </div>
      <input
        id="google-map-autocomplete-input"
        type="text"
        placeholder="Somewhere"/>
    </div>
  );
};


export default SearchBar;
