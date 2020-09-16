import React, { useState, Fragment } from 'react';
import './Home.css';

import Search from '../../components/search/Search';
import Blogs from '../../components/blogs/Blogs';
import Create from '../../components/create/Create';

export default function Home() {
    const [isCreateBlog, setIsCreateBlog] = useState(false);

    const handleCreateBlog = isShow => {
        setIsCreateBlog(isShow);
    };

    return (
        <>
            <header>
                <h1 onClick={() => handleCreateBlog(false)}>Simple Blog</h1>
                <button onClick={() => handleCreateBlog(true)}>Create Blog</button>
            </header>

            {isCreateBlog ? (
                <Create />
            ) : (
                <Fragment>
                    <Search />
                    <Blogs />
                </Fragment>
            )}
        </>
    );
}
