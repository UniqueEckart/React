import React, { useEffect, useState } from 'react';
import Users from './pages/Users';
import User from './pages/User';
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import axios from 'axios';
import Auth from './components/Auth';

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.withCredentials = true;

function App() {
    useEffect(() => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then(() => {
                console.log("csrf")
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <Router>
            <Auth />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/home' exact element={<Users />} />
                <Route path='/user/:id' exact element={<User />} />
                <Route path='/login' exact element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
