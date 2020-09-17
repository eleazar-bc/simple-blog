import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
    const history = useHistory();

    const handleClick = route => {
        history.push(route);
    };

    return (
        <header>
            <h1 onClick={() => handleClick('/')}>Simple Blog</h1>
            <button onClick={() => handleClick('/create')}>Create Blog</button>
        </header>
    );
}
