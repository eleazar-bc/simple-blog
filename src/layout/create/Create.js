import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './Create.css';

import { useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

export default function Create() {
    const firestore = useFirestore();
    const history = useHistory();
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
        firestore
            .collection('blogs')
            .add({
                title: newTitle,
                content: newContent,
                date: new Date()
            })
            .then(() => {
                setTitle('');
                setContent('');
                history.push('/');
                // todo: blog saved message
            })
            .catch(() => {
                alert('Cannot create new blog now. Please try again later.');
            });
    };

    return (
        <>
            <Header />
            <div className='create-form-container'>
                <form className='create-form' onSubmit={saveBlog}>
                    <input
                        className='new-title-input'
                        placeholder='Blog Title'
                        required
                        onChange={handleTitleChange}
                        value={newTitle}
                    ></input>
                    <textarea
                        className='new-content-input'
                        placeholder='Content'
                        rows='20'
                        required
                        onChange={handleContentChange}
                        value={newContent}
                    ></textarea>
                    <div className='button-container'>
                        <button type='submit' className='save-button'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
