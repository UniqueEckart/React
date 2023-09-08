import React, { useState } from 'react';

function TableItem({name, group, onEdit, onDel }) {
    const [initialitem] = useState(name)
    const [item, setItem] = useState(name)
    return (
        <tr key={name} className='table-item'>
            <td><input type="text" value={item} onChange={(e) => setItem(e.target.value)}/></td>
            <td className='user-group'>{group}</td>
            <td><button className='btn-edit' onClick={() => onEdit(item, initialitem)}>Edit</button></td>
            <td><button className='btn-delete' onClick={onDel}>Delete</button></td>
        </tr>
    );
}

export default TableItem;