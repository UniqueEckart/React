import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='flex flex-col text-center bg-sky-900 w-24 text-white'>
            <div>
                <Link to="/"><img src='/logo192.png' alt="Homepage" /></Link>
            </div>
            <div className="flex flex-col p-5">
                <Link to="" className='pb-5'>Link 1</Link>
                <Link to="" className='pb-5'>Link 2</Link>
            </div>
        </div>
    );
}

export default Sidebar;