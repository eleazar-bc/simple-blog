import React, { useState, Fragment } from 'react';
import './Home.css';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Blogs from '../../components/blogs/Blogs';
import Create from '../../components/create/Create';

export default function Home() {
    const [isCreateBlog, setIsCreateBlog] = useState(false);

    const DISPLAY = {
        blogs: (
            <Fragment>
                <Search />
                <Blogs />
            </Fragment>
        ),
        create: <Create />
        // blog: <Blog />
    };

    const handleCreateBlog = isShow => {
        console.log(isShow);
        setIsCreateBlog(isShow);
    };

    return (
        <>
            <Header handleCreateBlog={handleCreateBlog} />
            {/* <header>
                <h1 onClick={() => handleCreateBlog(false)}>Simple Blog</h1>
                <button onClick={() => handleCreateBlog(true)}>Create Blog</button>
            </header> */}

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
