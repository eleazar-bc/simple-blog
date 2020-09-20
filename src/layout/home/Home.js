import React, { useState, useEffect } from 'react';
import './Home.css';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import BlogsList from '../../components/blogsList/blogsList';

import * as FirestoreService from '../../services/firestoreService';

export default function Home() {
    const [allBlogs, setAllBlogs] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState({});

    useEffect(() => {
        FirestoreService.getAllBlogs().then(blogs => {
            setAllBlogs(blogs);
        });
    }, []);

    const filterBlogs = () => {
        const filtered = allBlogs.filter(blog =>
            blog.title.toLowerCase().includes(searchText)
        );

        return sortBlogs(filtered);
    };

    const sortBlogs = blogs => {
        const sorted = [...blogs].sort((a, b) => {
            if (a[sort.type] < b[sort.type]) {
                return sort.direction === 'ascending' ? -1 : 1;
            }
            if (a[sort.type] > b[sort.type]) {
                return sort.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    };

    const setSearchTextState = text => {
        setSearchText(text);
    };

    const setSortState = sort => {
        setSort({ type: sort.type, direction: sort.direction });
    };

    return (
        <>
            <Header />
            <Search handleSearch={setSearchTextState} />
            <BlogsList blogs={filterBlogs(allBlogs)} sort={setSortState} />
        </>
    );
}
