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
//     return (
//         <div className='p-4'> 
//             <Back />
//             <h1 className='text-3x1 my-4'> Create Game </h1>
//             { loading ? <Load /> : ''}
//             <div className='flex flex-col border-2 border-green-400 rounded-x1 w-[600px] p-4 mx-auto'>
//                 <div className='my-4'>
//                     <label className='text-x1 mr-4 text-gray-500' > Title </label>
//                     <input
//                         type='text'
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className='border-2 border-gray-500 px-4 py-2 w-full'
//                         />
//                 </div>
//                 <div className='my-4'>
//                     <label className='text-x1 mr-4 text-gray-500' > Developer </label>
//                     <input
//                         type='text'
//                         value={developer}
//                         onChange={(e) => setDeveloper(e.target.value)}
//                         className='border-2 border-gray-500 px-4 py-2 w-full'
//                         />
//                 </div>
//                 <div className='my-4'>
//                     <label className='text-x1 mr-4 text-gray-500' > Release Year </label>
//                     <input
//                         type='text'
//                         value={releaseYear}
//                         onChange={(e) => setreleaseYear(e.target.value)}
//                         className='border-2 border-gray-500 px-4 py-2 w-full'
//                         />
//                 </div>
//                 <button className='p-2 bg-green-300 m-8' onClick={handleSaveGame} >
//                 Save Game
//                 </button>
//             </div>
//         </div>
//     )
// }
// export default CreateGames

return (
    <div className='p-6 bg-gray-100'>
        <Back />
        <h1 className='text-4xl font-bold text-gray-800 my-6'>Create Game Entry</h1>
        {loading ? <Load /> : ''}
        <div className='flex flex-col border-4 border-green-500 rounded-lg shadow-lg p-6 bg-white max-w-lg mx-auto'>
            <div className='mb-4'>
                <label className='text-lg font-semibold text-gray-700'>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-gray-400 mt-1 px-4 py-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                />
            </div>
            <div className='mb-4'>
                <label className='text-lg font-semibold text-gray-700'>Developer</label>
                <input
                    type='text'
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                    className='border-2 border-gray-400 mt-1 px-4 py-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                />
            </div>
            <div className='mb-4'>
                <label className='text-lg font-semibold text-gray-700'>Release Year</label>
                <input
                    type='text'
                    value={releaseYear}
                    onChange={(e) => setreleaseYear(e.target.value)}
                    className='border-2 border-gray-400 mt-1 px-4 py-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                />
            </div>
            <button className='mt-4 w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline' onClick={handleSaveGame}>
                Save Game
            </button>
        </div>
    </div>
);
}
export default CreateGames;
