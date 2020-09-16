import React from 'react';
import './Home.css';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Blog from '../../components/blog/Blog';

export default function Home() {
    return (
        <>
            <Header />
            <Search />

            <div className='blogs-container'>
                <Blog />
                <Blog />
                <Blog />
            </div>
        </>
    );
}
