import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layout/home/Home';
import Blog from './layout/blog/Blog';
import Create from './layout/create/Create';

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/blog/:id' component={Blog} />
                <Route path='/create' component={Create} />
            </Router>
        </div>
    );
}

export default App;
