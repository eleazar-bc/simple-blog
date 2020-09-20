import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './Create.css';
import { useHistory } from 'react-router-dom';
import * as FirestoreService from '../../services/firestoreService';

export default function Create() {
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
        FirestoreService.addBlog({
            title: newTitle,
            content: newContent,
            date: new Date()
        })
            .then(docRef => {
                setTitle('');
                setContent('');
                history.push(`/blog/${docRef.id}`);
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
                        <button type='submit' className='action-button'>
                            Save
                        </button>
                        <button
                            type='button'
                            className='action-button'
                            onClick={() => history.push('/')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
