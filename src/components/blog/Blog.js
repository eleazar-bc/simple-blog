import React from 'react';
import './Blog.css';

export default function Blog() {
    return (
        <div className='blog-item'>
            <div className='blog-title'>
                <a href='#'>Blog Title</a>
            </div>
            <div className='blog-content'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolorum
                harum recusandae deleniti quos placeat architecto officia excepturi atque
                iste sapiente iure reiciendis expedita totam inventore explicabo
                voluptates, quisquam dolorem.
            </div>
        </div>
    );
}
