import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import logo from '../images/mahadev.webp';

const PostCard = ({ title, location, date, numberDevotee }) => {
  const submitHandler = (str) => {
    console.log(`${str} was clicked`);
  }
  
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <img src={logo} alt="Post image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
        <div className="flex items-center text-gray-600 mt-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="border-t border-gray-300 mt-2 mb-2" style={{ opacity: 0.3 }}></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-gray-600">
              <FaCalendarAlt className="mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUserAlt className="mr-2" />
              <span>{numberDevotee} Devotees</span>
            </div>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <button className="py-2 px-4 bg-orange-500 text-white rounded-md" onClick={() => submitHandler("participate")}>
              Participate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
