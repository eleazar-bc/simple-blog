import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

export default function Blog(props) {
    const url = `/blog/${props.post.id}`;
    return (
        <div className='blog-item'>
            <div className='blog-title'>
                {/* <a href='#'>{props.post.title}</a> */}
                <Link to={url}>{props.post.title}</Link>
                {/* todo: add date */}
            </div>
            <div className='blog-content'>{props.post.content}</div>
        </div>
    );
}
