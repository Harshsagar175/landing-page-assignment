import { FaArrowRight } from 'react-icons/fa';  // Importing the right arrow icon from react-icons

const HeaderText = () => {
  return (
    <div className="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[60vw] mx-auto p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2">
        Puja Seva for you and your loved ones
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-center text-gray-500 mb-4 text-gray-700">
        Book Pujas in your family's name at 10000+ renowned temples in India. You will also receive a video of the puja and prasad along with the divine blessings.
      </p>

      <button className="flex items-center px-4 py-2 text-orange-500 bg-white rounded-md shadow hover:bg-gray-200 transition">
        <span>Go to Next</span>
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default HeaderText;
