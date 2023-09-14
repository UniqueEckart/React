import React from 'react';
import Users from './pages/Users';
import User from './pages/User';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/home' exact element={<Users />} />
                <Route path='/user/:id' exact element={<User />} />
            </Routes>
        </Router>
    );
}

export default App;
