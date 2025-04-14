import React from "react";

function SearchBar({ handleFilterFunction }) {
    return (
        <div className="search-bar">

            <input type="text" placeholder="Search" name='filter' onChange={handleFilterFunction} />

        </div>
    )
}

export default SearchBar;