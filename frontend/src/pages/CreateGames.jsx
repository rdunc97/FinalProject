import React, {useState} from 'react';
import Back from '../components/Back';
import Load from '../components/load';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateGames = () => {
    const [title, setTitle] = useState('');
    const [developer, setDeveloper] = useState('');
    const [releaseYear, setreleaseYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveGame = () => {
        const data = {
            title,
            developer,
            releaseYear,
        };
        setLoading(true);
        axios.post('http://localhost:5555/games',data)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('error');
        });
    };
    return (
        <div className='p-4'> 
            <Back />
            <h1 className='text-3x1 my-4'> Create Game </h1>
            { loading ? <Load /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500' > Title </label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500' > Developer </label>
                    <input
                        type='text'
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500' > Release Year </label>
                    <input
                        type='text'
                        value={releaseYear}
                        onChange={(e) => setreleaseYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                </div>
                <button className='p-2 bg-green-300 m-8' onClick={handleSaveGame} >
                Save Game
                </button>
            </div>
        </div>
    )
}
export default CreateGames