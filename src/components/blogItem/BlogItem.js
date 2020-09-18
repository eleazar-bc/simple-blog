import React from 'react';
import './BlogItem.css';
import { Link } from 'react-router-dom';

export default function BlogItem(props) {
    const url = `/blog/${props.post.id}`;
    return (
        <div className='blog-item'>
            <div className='blog-title'>
                <Link to={url}>{props.post.title}</Link>
            </div>
            <p className='blog-date'>{props.post.date.toDate().toString()}</p>
            <div className='blog-content'>{props.post.content}</div>
        </div>
    );
}
