import React, { useState, useEffect } from 'react';
import './Blog.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import useConfirmationModal from '../../components/confirmationModal/useConfirmationModal';
import ConfirmationModal from '../../components/confirmationModal/ConfirmationModal';
import { useHistory } from 'react-router-dom';

import * as FirestoreService from '../../services/firestoreService';

export default function Blog() {
    let { id } = useParams();
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [blogId, setBlogId] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogDate, setBlogDate] = useState('');
    const { isVisible, toggleModal } = useConfirmationModal();
    const history = useHistory();

    useEffect(() => {
        FirestoreService.getBlogById(id).then(blog => {
            console.log('Firestore');
            setBlogId(blog.id);
            setBlogTitle(blog.title);
            setBlogContent(blog.content);
            setBlogDate(blog.date.toDate().toString());
        });
    });

    const handleEditButtonClick = () => {
        setIsEditEnabled(!isEditEnabled);
    };

    const handleTitleChange = event => {
        setBlogTitle(event.target.value);
    };

    const handleContentChange = event => {
        setBlogContent(event.target.value);
    };

    const handleSaveBlog = event => {
        event.preventDefault();
        FirestoreService.updateBlog({
            id: blogId,
            title: blogTitle,
            content: blogContent,
            date: new Date()
        })
            .then(() => {
                alert('Blog Updated');
                setIsEditEnabled(!isEditEnabled);
            })
            .catch(() => {
                alert('Cannot update blog now. Please try again later.');
            });
    };

    const handleDelete = () => {
        FirestoreService.deleteBlog(blogId)
            .then(() => {
                toggleModal();
                history.push('/');
            })
            .catch(error => {
                alert('Cannot delete this blog now. Please try again later.');
            });
    };

    const renderBlog = () => {
        return (
            <>
                <h1>{blogTitle}</h1>
                <p className='blog-date'>{blogDate}</p>
                <p>{blogContent}</p>

                <div className='action-buttons-container'>
                    <button
                        className='cancel-edit-button action-button'
                        onClick={handleEditButtonClick}
                    >
                        Edit
                    </button>
                </div>
            </>
        );
    };

    const renderEditBlog = () => {
        return (
            <form className='update-blog-form' onSubmit={handleSaveBlog}>
                <input
                    className='update-title-input'
                    onChange={handleTitleChange}
                    type='text'
                    required
                    value={blogTitle}
                />
                <textarea
                    className='update-content-input'
                    onChange={handleContentChange}
                    required
                    rows='20'
                >
                    {blogContent}
                </textarea>
                <div className='action-buttons-container'>
                    <button
                        className='cancel-edit-button action-button'
                        onClick={handleEditButtonClick}
                    >
                        Cancel
                    </button>
                    {isEditEnabled && (
                        <button
                            className='update-save-button action-button'
                            type='submit'
                        >
                            Save
                        </button>
                    )}
                    {isEditEnabled && (
                        <button
                            type='button'
                            className='update-delete-button action-button'
                            onClick={toggleModal}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        );
    };

    return (
        <>
            <Header />
            <div className='blog-container'>
                {isEditEnabled ? renderEditBlog() : renderBlog()}
                <ConfirmationModal
                    isVisible={isVisible}
                    toggleModal={toggleModal}
                    onConfirm={handleDelete}
                />
            </div>
        </>
    );
}
