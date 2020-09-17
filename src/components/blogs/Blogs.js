import React, { useState, useEffect } from 'react';
import './Blogs.css';

import { useSelector } from 'react-redux';

import BlogItem from '../blogItem/BlogItem';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.filtered);
    const [sortedBlogs, setSortedBlogs] = useState(blogs);
    const [sortType, setSortType] = useState('title');

    useEffect(() => {
        setSortedBlogs(blogs);
    }, blogs);

    useEffect(() => {
        const sortBlogs = () => {
            const sorted = blogs && [...blogs].sort((a, b) => b[sortType] < a[sortType]);
            setSortedBlogs(sorted);
        };

        sortBlogs();
    }, [sortType]);

    const sortBlogs = type => {
        setSortType(type);
    };

    return (
        <div className='blogs-container'>
            <div className='sort-buttons'>
                Sort by:
                <button onClick={() => sortBlogs('title')}>Title</button>
                <button onClick={() => sortBlogs('date')}>Date</button>
            </div>
            {sortedBlogs &&
                sortedBlogs.map(blogItem => {
                    return <BlogItem key={blogItem.id} post={blogItem} />;
                })}
        </div>
    );
}
