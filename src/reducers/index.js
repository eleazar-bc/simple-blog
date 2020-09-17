import { combineReducers } from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import blogsReducer from './blogsReducer';

const allReducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    blogs: blogsReducer
});

export default allReducers;
