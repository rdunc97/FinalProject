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


//     return (
//         <div className='p-4' >
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3x1 my-8'> Games Library </h1>
//                 <Link to='/games/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4x1' />
//                 </Link>

//             </div>
//             {loading ? (
//                 <Load />
//             ) : (
//                 <table className='w-full border-separate border-spacing-2'>
//                     <thead>
//                         <tr>
//                             <th className='border border-slate-600 rounded-md'>No </th>
//                             <th className='border border-slate-600 rounded-md'> Title </th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'> Developer </th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'> Release Year </th>
//                             <th className='border border-slate-600 rounded-md'> Ops </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {games.map((game, index) => (
//                             <tr key={game._id} className='h-8' >
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     {index + 1}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     {game.title}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                                     {game.developer}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                                     {game.releaseYear}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     <div className='flex justify-center gap-x-4'>
//                                         <Link to={`/games/details/${game._id}`} >
//                                             <BsInfoCircle className='text-2x1 text-green-800' />
//                                         </Link>
//                                         <Link to={`/games/edit/${game._id}`} >
//                                             <AiOutlineEdit className='text-2x1 text-yellow-600' />
//                                         </Link>
//                                         <Link to={`/games/delete/${game._id}`} >
//                                             <MdOutlineDelete className='text-2x1 text-red-600' />
//                                         </Link>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };
// export default Home;

return (
    <div className='p-6 bg-gray-200'>
        <div className='flex justify-between items-center bg-white shadow-md p-4 rounded-lg'>
            <h1 className='text-4xl font-bold text-gray-800'>Games Library</h1>
            <Link to='/games/create'>
                <MdOutlineAddBox className='text-blue-600 text-5xl' />
            </Link>
        </div>
        {loading ? (
            <Load />
        ) : (
            <table className='w-full mt-6'>
                <thead className='bg-blue-500 text-white'>
                    <tr>
                        <th className='py-2 px-4'>No</th>
                        <th className='py-2 px-4'>Title</th>
                        <th className='py-2 px-4 hidden md:table-cell'>Developer</th>
                        <th className='py-2 px-4 hidden md:table-cell'>Release Year</th>
                        <th className='py-2 px-4'>Ops</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {games.map((game, index) => (
                        <tr key={game._id} className='border-b last:border-b-0'>
                            <td className='text-center py-3 px-4'>
                                {index + 1}
                            </td>
                            <td className='text-center py-3 px-4'>
                                {game.title}
                            </td>
                            <td className='text-center py-3 px-4 hidden md:table-cell'>
                                {game.developer}
                            </td>
                            <td className='text-center py-3 px-4 hidden md:table-cell'>
                                {game.releaseYear}
                            </td>
                            <td className='py-3 px-4'>
                                <div className='flex justify-center space-x-3'>
                                    <Link to={`/games/details/${game._id}`}>
                                        <BsInfoCircle className='text-3xl text-green-500' />
                                    </Link>
                                    <Link to={`/games/edit/${game._id}`}>
                                        <AiOutlineEdit className='text-3xl text-yellow-600' />
                                    </Link>
                                    <Link to={`/games/delete/${game._id}`}>
                                        <MdOutlineDelete className='text-3xl text-red-800' />
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
}
export default Home;
