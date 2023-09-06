import { React, useEffect, useState } from 'react';
import TableItem from './TableItem';
import axios from 'axios';

function Table() {
    const [item, setItem] = useState([])

    const delItem = (index) => {
        axios.post('http://localhost:8000/delete-user', {
            name: item[index].name
        })
            .then(() => {
                fetchData()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const editItem = (afterChange, beforeChange) => {
        axios.post('http://localhost:8000/update-user', {
            oldName: beforeChange,
            newName: afterChange
        })
            .catch(function (error) {
                console.log(error)
            })
    }

    const fetchData = async () => {
        await axios.get('http://localhost:8000/users')
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
        <table className='master-table'>
            <thead>
                <tr>
                    <th className='username'>Username</th>
                    <th className='group'>Group</th>
                </tr>
            </thead>
            <tbody>
                {item.map((user, index) => (
                    <TableItem key={user.name} onDel={() => delItem(index)} onEdit={editItem} name={user.name} group={user.group} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;