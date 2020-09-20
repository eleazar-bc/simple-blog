import React, { useState } from 'react';
import './Search.css';

export default function Search(props) {
    const [searchText, setSearchText] = useState('');

    const handleSearchInputChange = e => {
        setSearchText(e.target.value);
        props.handleSearch(e.target.value);
    };

    return (
        <div className='search-container'>
            <input
                onChange={handleSearchInputChange}
                value={searchText}
                className='search-input'
                type='text'
                placeholder='Search blogs...'
            />
            <button className='search-button'>Search</button>
        </div>
    );
}
