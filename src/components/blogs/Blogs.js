import React, { useState, useEffect } from 'react';
import './Blogs.css';

import { useSelector } from 'react-redux';

import BlogItem from '../blogItem/BlogItem';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.filtered);
    const [sortedBlogs, setSortedBlogs] = useState(blogs);
    const [sortType, setSortType] = useState('title-ascending');

    useEffect(() => {
        const sortBlogs = () => {
            setSortedBlogs(
                blogs &&
                    [...blogs].sort((a, b) => {
                        // todo: ignore case
                        if (a[sortType.type] < b[sortType.type]) {
                            return sortType.direction === 'ascending' ? -1 : 1;
                        }

                        if (a[sortType.type] > b[sortType.type]) {
                            return sortType.direction === 'ascending' ? 1 : -1;
                        }
                    })
            );
        };

        sortBlogs();
    }, [sortType, blogs]);

    const sortBlogs = event => {
        const type = event.target.value.split('-')[0];
        const direction = event.target.value.split('-')[1];

        setSortType({ type, direction });
    };

    return (
        <div className='blogs-container'>
            <div className='sort-buttons'>
                Sort by:
                <select className='sort-type-select' onChange={sortBlogs}>
                    <option value='' disabled selected>
                        Select
                    </option>
                    <option value='title-ascending'>Title</option>
                    <option value='date-descending'>Date (newest)</option>
                    <option value='date-ascending'>Date (oldest)</option>
                </select>
            </div>
            {sortedBlogs &&
                sortedBlogs.map(blogItem => {
                    return <BlogItem key={blogItem.id} post={blogItem} />;
                })}
        </div>
    );
}
