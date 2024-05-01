import React, { useState, useEffect } from 'react';
import Back from '../components/Back';
import Load from '../components/load';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteGame = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteGame = () => {
        setLoading(true);
        axios
        .delete(`http://localhost:5555/games/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('error...');
            console.log(error);
        });
    };
    return (
        <div className='p-4'> 
        <Back /> 
        <h1 className='text-3x1 my-4'> Delete Game </h1> 
        { loading ?  <Load/> : ''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto' >
            <h3 className='text-2x1'> Confirm delete game? </h3>

            <button className='p-4 bg-orange-600 text-white m-8 w-full'
            onClick={handleDeleteGame}
            >
                Yes I want to delete
            </button>
        </div>
        </div>
    )
}
export default DeleteGame