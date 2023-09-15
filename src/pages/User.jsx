import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DocumentItem from '../components/DocumentItem';
import DropArea from '../components/DropArea';

function User() {
    let { id } = useParams()
    const [user, setUser] = useState("")
    const [cost_center, setCost_Center] = useState([])
    const [documents, setDocuments] = useState([])

    const construct_date = () => {
        const date = new Date()

        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        let current_date = `${day}.${month}.${year}`
        return current_date
    }


    const fileDropped = (e) => {
        let files = e.files
        if (files == null) console.log("No Valid Files")
        axios.post('http://localhost:8000/api/create-document', {
            name: files[0].name,
            creator_id: 1,
        }).then(() => {
            fetchDocuments()
        })
    }

    const fetchDocuments = () => {
        axios.get('http://localhost:8000/api/documents')
            .then(response => {
                setDocuments(response.data)
            })
    }

    const up = (e) => {
        axios.post(`http://localhost:8000/api/update-cost`, {
            user_id: user.id,
            id: parseInt(e.target.value)
        }).then(() => {
            fetchData()
        })
    }


    const fetchData = () => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const fetchCostCenter = () => {
        axios.get('http://localhost:8000/api/cost')
            .then(response => {
                setCost_Center(response.data)
            })
    }

    useEffect(() => {
        fetchData()
        fetchCostCenter()
        fetchDocuments()
    }, [])
    return (
        <div className='h-screen'>
            <div className='flex gap-3'>
                <Link className="pt-6 text-2xl font-bold" to="/home">Back</Link>
                <h1 className='w-1/2 pt-6 text-2xl font-bold'>Mitarbeiternummer #{user?.id ?? "Waiting for Data"}</h1>
                <h1 className='w-1/2 pt-6 text-2xl font-bold'>Kostenstelle #{user?.costcenter_id ?? "Waiting for Data"}</h1>
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
                        <h1>email</h1>
                        <input className="p-1 my-2" type="text" value={user?.email ?? "Waiting for Data"} />
                    </div>
                </div>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>Mitarbeiter Kostenstelle</h1>
                        <select className="p-1 my-2" name='kostenstelle' id='kostenstelle' onChange={(e) => up(e)} defaultValue={user?.costcenter_id}>
                            {cost_center?.map((cost_center) => <option key={cost_center.id} value={cost_center.id}>{cost_center.id}</option>)}
                        </select>
                    </div>
                </div>
                <div className='w-1/5 p-2 pl-0'>
                    <div className='bg-sky-500 flex flex-col w-full rounded p-4'>
                        <h1>Vorgesetzer</h1>
                        <input className="p-1 my-2" type="text" value={user?.chef_id ?? "Waiting for Data"} />
                    </div>
                </div>
            </div>
            <hr className='w-full border-b border-grey my-4'></hr>
            <div>
                <div className='flex'>
                    <div className='w-1/4 ml-8 border-2 rounded pb-10'>
                        <div className='flex flex-row gap-3 h-10 text-white'>
                            <div className='flex flex-warp w-full truncate justify-center items-center bg-sky-500'>
                            </div>
                            <div className='flex flex-warp w-full truncate justify-center items-center bg-sky-500'>
                                ID
                            </div>
                            <div className='flex flex-warp w-full truncate justify-center items-center bg-sky-500'>
                                Datei
                            </div>
                            <div className='w-full flex flex-wrap truncate justify-center items-center bg-sky-500'>
                                Ersteller
                            </div>
                            <div className='w-full flex flex-wrap truncate justify-center items-center bg-sky-500'>
                                Datum
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 mt-1'>
                            <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded'>
                                Suche nach
                            </div>
                            <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded'>
                                Suche nach
                            </div>
                            <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded'>
                                Suche nach
                            </div>
                            <div className='flex flex-warp w-full truncate justify-center items-center border-2 rounded'>
                                Suche nach
                            </div>
                        </div>
                        <DropArea class_name="h-full w-full overflow-y-scroll" onDrop={fileDropped} name="bg">
                            {documents.map((document) => (
                                <DocumentItem key={document.id} id={document.id} datei={document.name} ersteller={document.ersteller} datum={document.datum} />
                            ))}
                        </DropArea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;