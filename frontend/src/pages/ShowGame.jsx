import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Back from '../components/Back';
import Load from '../components/load';

const ShowGame = () => {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/games/${id}`)
            .then((response) => {
                setGame(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    return (

        <div className='p-4'>
            <Back />
            <h1 className='text-3x1 my-4'> Show Game </h1>
            {loading ? (
                <Load />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Id </span>
                        <span> {game._id} </span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Title </span>
                        <span> {game.title} </span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Developer </span>
                        <span> {game.developer} </span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Release Year </span>
                        <span> {game.releaseYear} </span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Create Time </span>
                        <span> {new Date(game.createdAt).toString()}  </span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'> Last Updated </span>
                        <span> {new Date(game.updatedAt).toString()} </span>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ShowGame;