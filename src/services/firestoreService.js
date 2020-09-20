import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const fbConfig = {
    apiKey: 'AIzaSyBi4xbF3EvwtxUv_tw3GcjR58EahHC1h18',
    authDomain: 'eleazar-simple-blog.firebaseapp.com',
    databaseURL: 'https://eleazar-simple-blog.firebaseio.com',
    projectId: 'eleazar-simple-blog',
    storageBucket: 'eleazar-simple-blog.appspot.com',
    messagingSenderId: '266287336514',
    appId: '1:266287336514:web:2a610242798e52a59471db'
};

firebase.initializeApp(fbConfig);
const db = firebase.firestore();

export const addBlog = ({ title, content, date }) => {
    return db.collection('blogs-dev').add({
        title,
        content,
        date
    });
};

export const getAllBlogs = () => {
    return db
        .collection('blogs-dev')
        .get()
        .then(blogs => blogs.docs)
        .then(docs =>
            docs.map(blog => {
                return { id: blog.id, ...blog.data() };
            })
        );
};

export const getBlogById = id => {
    return db
        .collection('blogs-dev')
        .doc(id)
        .get()
        .then(blog => {
            return { id: blog.id, ...blog.data() };
        });
};

export const updateBlog = ({ id, title, content, date }) => {
    return db.collection('blogs-dev').doc(id).set({ title, content, date });
};

export const deleteBlog = id => {
    return db.collection('blogs-dev').doc(id).delete();
};
