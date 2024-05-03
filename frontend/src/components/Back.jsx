import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


// const Back = ({ destination = '/' }) => {
//     return (
//         <div className='flex' >
//             <Link
//                 to={destination}
//                 className='bg-sky-800 text-white px-4 py-1 rounded-1g w-fit'
//             >
//                 <BsArrowLeft className='text-2x1' />
//             </Link>
//         </div>
//     );
// };

const Back = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link
                to={destination}
                className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-colors duration-150 ease-in-out'
            >
                <BsArrowLeft className='text-xl' /> Back
            </Link>
        </div>
    );
};


export default Back;

