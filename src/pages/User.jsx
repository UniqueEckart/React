import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
    let { id } = useParams()
    const [user, setUser] = useState()
    const [cost_center, setCost_Center] = useState([])

    const up = (e) => {
        axios.post(`http://localhost:8000/update-cost`, {
            user_id: user.id,
            id: e.target.value
        }).then(() => {
            fetchData()
        })
    }


    const fetchData = () => {
        axios.get(`http://localhost:8000/users/${id}`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const fetchCostCenter = () => {
        axios.get('http://localhost:8000/cost')
            .then(response => {
                setCost_Center(response.data)
            })
    }

    useEffect(() => {
        fetchData()
        fetchCostCenter()
    }, [])
    return (
        <div className='h-screen'>
            <div className='flex gap-3'>
                <Link className="pt-6 text-2xl font-bold" to="/home">Back</Link>
                <h1 className='w-1/2 pt-6 text-2xl font-bold'>Mitarbeiternummer #{user?.id ?? "Waiting for Data"}</h1>
                <h1 className='w-1/2 pt-6 text-2xl font-bold'>Kostenstelle #{user?.user_cost ?? "Waiting for Data"}</h1>
                <div className='flex w-1/3 flex-row-reverse mt-2 pb-2 rounded border-2 justify-center'>
                    <div className='mt-2'>
                        <button className='px-3 py-2 text-white bg-sky-400 mr-2'>Löschen</button>
                        <button className='px-3 py-2 text-white bg-sky-400 mr-2'>Zusammenfassen</button>
                        <button className='px-3 py-2 text-white bg-sky-400 mr-2'>Suchen</button>
                    </div>
                </div>
            </div>
            <hr className='w-full border-b border-grey my-4'></hr>
            <div className='flex flex-row w-full justify-center text-xl'>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>Projektnummer</h1>
                        <input className="p-1 my-2" type="text" value={user?.projektnumemr ?? "Waiting for Data"} />
                    </div>
                </div>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>Mitarbeiter Kostenstelle</h1>
                        <select className="p-1 my-2" name='kostenstelle' id='kostenstelle' onChange={(e) => up(e)}>
                            {cost_center?.map((cost_center) => <option key={cost_center.cost_id} value={cost_center.cost_id} selected={cost_center.cost_id == user?.user_cost ? true : false}>{cost_center.cost_id}</option>)}
                        </select>
                    </div>
                </div>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>Vorgesetzer</h1>
                        <input className="p-1 my-2" type="text" value={user?.chef ?? "Waiting for Data"} />
                    </div>
                </div>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>To be made</h1>
                        <input className="p-1 my-2" type="text" value={user?.mitarbeiternummer ?? "Waiting for Data"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;