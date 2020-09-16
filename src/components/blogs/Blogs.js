import React from 'react';
import './Blogs.css';

import Blog from '../blog/Blog';

export default function Blogs() {
    return (
        <div className='blogs-container'>
            <Blog />
            <Blog />
            <Blog />
        </div>
    );
}
