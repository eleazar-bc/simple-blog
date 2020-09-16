import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './layout/home/Home';

function App() {
    return (
        <div className='App'>
            <Router>
                <Route path='/' component={Home} />
                {/* todo: redirect invalid url */}
            </Router>
        </div>
    );
}

export default App;
