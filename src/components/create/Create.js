import React, { useState } from 'react';

import { useFirestore } from 'react-redux-firebase';

export default function Create() {
    const firestore = useFirestore();
    const [newTitle, setTitle] = useState('');
    const [newContent, setContent] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleContentChange = event => {
        setContent(event.target.value);
    };

    const saveBlog = event => {
        event.preventDefault();
        const createdAt = new Date();
        firestore
            .collection('blogs')
            .add({
                title: newTitle,
                content: newContent,
                date: createdAt
            })
            .then(() => {
                setTitle('');
                setContent('');
                console.log('New blog saved....');
            });
    };

    return (
        <div>
            <form onSubmit={saveBlog}>
                <input
                    placeholder='Blog Title'
                    required
                    onChange={handleTitleChange}
                    value={newTitle}
                ></input>
                <textarea
                    placeholder='Content'
                    rows='20'
                    cols='40'
                    required
                    onChange={handleContentChange}
                    value={newContent}
                ></textarea>
                <button className='button'>Save</button>
            </form>
        </div>
    );
}
