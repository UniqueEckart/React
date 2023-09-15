import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    return (
        <div className='bg-gray-200 h-screen flex flex-col items-center justify-center'>
            <h3>Welcome to this React Sample Project</h3>
            <div className='flex flex-col pt-3'>
                <p>Here is a little Link overview</p>
                <div className='flex flex-col mt-5 text-blue-600 justify-center items-center'>
                    <Link to="/">This is this Page right here</Link>
                    <Link to="/home">This is the Table page</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;