import React from 'react';
import { Link } from 'react-router-dom';

function DocumentItem({ datei, ersteller, datum }) {
    return (
        <Link to="https://google.de">
            <div className='flex flex-row gap-3 mt-1 h-10 group'>
                <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded group-hover:bg-sky-500/50'>
                    {datei}
                </div>
                <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded group-hover:bg-sky-500/50'>
                    {ersteller}
                </div>
                <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded group-hover:bg-sky-500/50'>
                    {datum}
                </div>
            </div>
        </Link>
    );
}

export default DocumentItem;