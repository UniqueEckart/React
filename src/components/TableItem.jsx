import React from 'react';
import { Link } from 'react-router-dom';


function TableItem({ id, name, group, standort, oe}) {
    return (
        <div className='mt-0.5 border-gray-500 border-2'>
            <Link to={"/user/" + id}>
                <div className='flex gap-1 bg-gray-600 h-10 w-full group'>
                <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-white text-black group-hover:bg-sky-500/50'>
                        {id}
                    </div>
                    <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-white text-black group-hover:bg-sky-500/50'>
                        {name}
                    </div>
                    <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-white text-black group-hover:bg-sky-500/50'>
                        {group}
                    </div>
                    <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-white text-black group-hover:bg-sky-500/50'>
                        {standort}
                    </div>
                    <div className=' w-full flex-wrap truncate flex items-center justify-center text-center bg-white text-black group-hover:bg-sky-500/50'>
                        {oe}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default TableItem;