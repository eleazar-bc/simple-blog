import React from 'react';
import './Blog.css';

export default function Blog(props) {
    return (
        <div className='blog-item'>
            <div className='blog-title'>
                <a href='#'>{props.post.title}</a>
            </div>
            <div className='blog-content'>{props.post.content}</div>
        </div>
    );
}
