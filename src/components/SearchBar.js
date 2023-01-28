import React from 'react'

const SearchBar = ({ placeHolder }) => {
  return (
    <div className="search-bar">
      <i class="fa fa-search"></i>
      <input placeholder={placeHolder }/>
    </div>
  );
};

export default SearchBar
