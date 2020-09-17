import React from 'react';
import './Home.css';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Blogs from '../../components/blogs/Blogs';

export default function Home() {
    return (
        <>
            <Header />
            <Search />
            <Blogs />
        </>
    );
}
