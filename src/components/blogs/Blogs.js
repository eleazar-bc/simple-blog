import React from 'react';
import './Blogs.css';

import { useSelector } from 'react-redux';

import Blog from '../blog/Blog';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.filtered);

    return (
        <div className='blogs-container'>
            {blogs &&
                blogs.map(blogItem => {
                    return <Blog key={blogItem.id} post={blogItem} />;
                })}
        </div>
    );
}
