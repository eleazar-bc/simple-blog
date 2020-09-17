import React from 'react';
import './Blogs.css';

import { useSelector } from 'react-redux';

import BlogItem from '../blogItem/BlogItem';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.filtered);

    return (
        <div className='blogs-container'>
            {blogs &&
                blogs.map(blogItem => {
                    return <BlogItem key={blogItem.id} post={blogItem} />;
                })}
        </div>
    );
}
