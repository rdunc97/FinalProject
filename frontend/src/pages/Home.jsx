import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Load from '../components/load';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const Home = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/games')
            .then((response) => {
                setGames(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    return (
        <div className='p-4' >
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Games Library </h1>
                <Link to='/games/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>

            </div>
            {loading ? (
                <Load />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No </th>
                            <th className='border border-slate-600 rounded-md'> Title </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Developer </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Release Year </th>
                            <th className='border border-slate-600 rounded-md'> Ops </th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => (
                            <tr key={game._id} className='h-8' >
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {game.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {game.developer}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {game.releaseYear}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/games/details/${game._id}`} >
                                            <BsInfoCircle className='text-2x1 text-green-800' />
                                        </Link>
                                        <Link to={`/games/edit/${game._id}`} >
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={`/games/delete/${game._id}`} >
                                            <MdOutlineDelete className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
export default Home;