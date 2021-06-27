import React, { useState } from 'react';
import "./Search.css";

function Search(props) {
    const {
        searchText,
        setSearchText
    } = props;

    

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
           
        }
    }

    return (
        <div>
            <div className="header_search">
                <input type="text"
                    onChange={handleInput}
                    onKeyPress={handleEnterKeyPressed}
                    className="header_searchInput"
                    placeholder="Search..."
                    value={searchText}
                />
            </div>
        </div>
    );
}

export default Search;
