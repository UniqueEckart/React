import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = (e) => {
        console.log(user)
        console.log(password)
        axios.post('http://localhost:8000/api/login', {
            name: user,
            password: password
        })
        .then(() => {
            navigate('/home')
        })
    }

    return ( 
        <div className='flex flex-col items-center justify-center'>
            <h1>Login</h1>
            <div className='flex flex-col mt-3'>
                <input className="border-2 rounded text-center mb-1" type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)}/>
                <input className="border-2 rounded text-center mb-1" type='password' placeholder='Passowrd' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='border-2 rounded-full text-center' onClick={(e) => login(e)}>Login</button>
            </div>
        </div>
     );
}

export default Login;