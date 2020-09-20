import React, { useState, useEffect } from 'react';
import './blogsList.css';
import BlogItem from '../blogItem/BlogItem';

export default function BlogsList(props) {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        setAllBlogs(props.blogs);
    }, [props.blogs]);

    const handleSort = event => {
        const type = event.target.value.split('-')[0];
        const direction = event.target.value.split('-')[1];

        props.sort({ type, direction });
    };

    return (
        <div className='blogs-container'>
            <div className='filters-container'>
                <div className='sort-buttons'>
                    Sort by:
                    <select
                        value='date-descending'
                        className='sort-type-select'
                        onChange={handleSort}
                    >
                        <option value='title-ascending'>Title</option>
                        <option value='date-descending'>Date (newest)</option>
                        <option value='date-ascending'>Date (oldest)</option>
                    </select>
                </div>
            </div>

            {allBlogs.map(blog => {
                return <BlogItem key={blog.id} post={blog} />;
            })}
        </div>
    );
}
