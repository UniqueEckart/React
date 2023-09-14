import React, { useState, useEffect } from 'react';
import TableItem from './TableItem';
import axios from 'axios';


function Table() {
    const [item, setItem] = useState([])
    const fetchData = () => {
        axios.get('http://localhost:8000/users')
            .then(response => {
                setItem(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='mt-1'>
            <div className='flex gap-1 bg-gray-600 h-10 w-full'>
                <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-sky-900 text-white'>
                    ID
                </div>
                <div className='w-full flex-wrap truncate flex items-center justify-center text-center bg-sky-900 text-white'>
                    Benutznername
                </div>
                <div className='w-full flex-wrap flex items-center justify-center text-center bg-sky-900 text-white'>
                    Gruppe
                </div>
                <div className='w-full flex-wrap flex items-center justify-center text-center bg-sky-900 text-white'>
                    Standort
                </div>
                <div className='w-full flex-wrap flex items-center justify-center text-center bg-sky-900 text-white'>
                    Organisationseinheit
                </div>
            </div>
            {item.map((user) => (
                <TableItem key={user.id} id={user.id} name={user.name} group={user.group} standort={user.standort} oe={user.oe} />
            ))}
        </div>
    );
}

export default Table;