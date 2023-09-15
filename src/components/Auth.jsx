import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Auth() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        axios.get("http://localhost:8000/api/user")
            .then(() => {

            })
            .catch((err) => {
                console.log(location)
                if(location.pathname != "/login") {
                    if (err.response?.status === 401) {
                        navigate('/login')
                    }
                }
            })
    }, [])

    return ( 
        <>
        </>
     );
}

export default Auth;