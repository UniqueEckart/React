import React from 'react';
import Table from './components/Table'
import Sidebar from './components/Sidebar';
import Comp from './components/comp';

function App() {

    return (
        <div className='wrapper'>
            <Sidebar />
            <div className='main-control'>
                <Table/>
                <Comp/>
            </div>
        </div>
    );
}

export default App;