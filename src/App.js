import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './layout/home/Home';
import CreateBlog from './layout/create/CreateBlog';

function App() {
    return (
        <div className='App'>
            <Router>
                <Route path='/home' component={Home} />
                <Route path='/create' component={CreateBlog} />
                {/* todo: redirect invalid url */}
            </Router>
        </div>
    );
}

export default App;
