import React, { useState } from 'react';
import './Search.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchBlog } from '../../actions/blogsAction';

export default function Search() {
    const dispatch = useDispatch();
    const searchFilter = useSelector(state => state.blogs.searchText);
    const [searchText, setSearchText] = useState(searchFilter);

    const handleSearchInputChange = e => {
        setSearchText(e.target.value);
        dispatch(searchBlog(e.target.value));
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
