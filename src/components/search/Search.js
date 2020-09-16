import React from 'react';
import './Search.css';

export default function Search() {
    return (
        <div className='search-container'>
            <input className='search-input' type='text' placeholder='Search blogs...' />
            <button className='search-button'>Search</button>
        </div>
    );
}
