import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header>
            <h1 onClick={props.handleCreateBlog}>Simple Blog</h1>
            <button onClick={props.handleCreateBlog}>Create Blog</button>
        </header>
    );
}
