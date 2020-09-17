import React from 'react';
import { useParams } from 'react-router-dom';

export default function Blog() {
    let { id } = useParams();
    console.log(id);

    return (
        <>
            {/* <header>
                <h1 onClick={() => handleCreateBlog(false)}>Simple Blog</h1>
                <button onClick={() => handleCreateBlog(true)}>Create Blog</button>
            </header> */}
            <div>
                <h1>Blog Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
                    dolorum harum recusandae deleniti quos placeat architecto officia
                    excepturi atque iste sapiente iure reiciendis expedita totam inventore
                    explicabo voluptates, quisquam dolorem.Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Suscipit dolorum harum recusandae
                    deleniti quos placeat architecto officia excepturi atque iste sapiente
                    iure reiciendis expedita totam inventore explicabo voluptates,
                    quisquam dolorem.Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Suscipit dolorum harum recusandae deleniti quos placeat
                    architecto officia excepturi atque iste sapiente iure reiciendis
                    expedita totam inventore explicabo voluptates, quisquam dolorem.Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolorum
                    harum recusandae deleniti quos placeat architecto officia excepturi
                    atque iste sapiente iure reiciendis expedita totam inventore explicabo
                    voluptates, quisquam dolorem.
                </p>
            </div>
        </>
    );
}
