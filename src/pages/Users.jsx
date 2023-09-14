import React from 'react';
import Table from '../components/Table';
import Sidebar from '../components/Sidebar';

function Users() {
    return (
        <div className='wrapper flex flex-nowrap gap-1 h-screen'>
            <Sidebar/>
            <div className='main-control h-full w-full overflow-y-scroll'>
                <Table/>
            </div>
        </div>
    );
}

export default Users;