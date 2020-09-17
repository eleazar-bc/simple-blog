import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import Home from './layout/home/Home';
import Blog from './layout/blog/Blog';

import { setBlogs } from './actions/blogsAction';

function App() {
    const dispatch = useDispatch();
    useFirestoreConnect('blogs');
    const blogs = useSelector(({ firestore: { ordered } }) => ordered.blogs);
    dispatch(setBlogs(blogs));

    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/blog/:id' component={Blog} />
            </Router>
        </div>
    );
}

export default App;
