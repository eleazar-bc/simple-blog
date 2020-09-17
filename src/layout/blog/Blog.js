import React, { useState } from 'react';
import './Blog.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import Header from '../../components/header/Header';
import useConfirmationModal from '../../components/confirmationModal/useConfirmationModal';
import ConfirmationModal from '../../components/confirmationModal/ConfirmationModal';
import { useHistory } from 'react-router-dom';

export default function Blog() {
    const firestore = useFirestore();
    const blogs = useSelector(state => state.blogs.all);
    let { id } = useParams();
    const { isVisible, toggleModal } = useConfirmationModal();

    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [blogId, setBlogId] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const history = useHistory();

    const getBlogById = () => {
        return (
            blogs &&
            blogs.filter(blog => {
                return blog.id === id;
            })
        );
    };

    const handleEditButtonClick = () => {
        const activeBlog = getBlogById();
        setBlogId(activeBlog && activeBlog[0].id);
        setBlogTitle(activeBlog && activeBlog[0].title);
        setBlogContent(activeBlog && activeBlog[0].content);
        setIsEditEnabled(!isEditEnabled);
    };

    const handleTitleChange = event => {
        setBlogTitle(event.target.value);
    };

    const handleContentChange = event => {
        setBlogContent(event.target.value);
    };

    const handleSaveBlog = () => {
        firestore
            .collection('blogs')
            .doc(blogId)
            .update({
                title: blogTitle,
                content: blogContent
            })
            .then(() => {
                alert('Blog Updated');
                setIsEditEnabled(!isEditEnabled);
                // todo: blog updated, handle error
            });
    };

    const handleDelete = () => {
        firestore
            .delete(`blogs/${blogId}`)
            .then(() => {
                toggleModal();
                history.push('/');
            })
            .catch(error => {
                alert('Unable to delete this blog.');
                // todo: handle error
            });
    };

    const renderBlog = () => {
        const activeBlog = getBlogById();

        return (
            <>
                <h1>{activeBlog && activeBlog[0].title}</h1>
                <p className='blog-date'>
                    {activeBlog && activeBlog[0].date.toDate().toString()}
                </p>
                <p>{activeBlog && activeBlog[0].content}</p>
            </>
        );
    };

    const renderEditBlog = () => {
        const activeBlog = getBlogById();

        return (
            <>
                <input
                    className='update-title-input'
                    onChange={handleTitleChange}
                    type='text'
                    value={blogTitle}
                />
                <textarea className='update-content-input' onChange={handleContentChange}>
                    {blogContent}
                </textarea>
            </>
        );
    };

    return (
        <>
            <Header />
            <div className='blog-container'>
                {isEditEnabled ? renderEditBlog() : renderBlog()}
                <div className='action-buttons-container'>
                    <button
                        className='cancel-edit-button action-button'
                        onClick={handleEditButtonClick}
                    >
                        {isEditEnabled ? 'Cancel' : 'Edit'}
                    </button>
                    {isEditEnabled && (
                        <button
                            className='update-save-button action-button'
                            onClick={handleSaveBlog}
                        >
                            Save
                        </button>
                    )}
                    {isEditEnabled && (
                        <button
                            className='update-delete-button action-button'
                            onClick={toggleModal}
                        >
                            Delete
                        </button>
                    )}
                </div>

                <ConfirmationModal
                    isVisible={isVisible}
                    toggleModal={toggleModal}
                    onConfirm={handleDelete}
                />
            </div>
        </>
    );
}