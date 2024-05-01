import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


const Back = ({ destination = '/' }) => {
    return (
        <div className='flex' >
            <Link
                to={destination}
                className='bg-sky-800 text-white px-4 py-1 rounded-1g w-fit'
            >
                <BsArrowLeft className='text-2x1' />
            </Link>
        </div>
    );
};

export default Back;
