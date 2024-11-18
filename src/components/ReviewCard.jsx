import logo from '../images/mahadev.webp';

const ReviewCard = ({ name, location, reviewText }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <p className="bg-gray-200 p-6 w-full h-32 overflow-hidden text-sm text-gray-700 rounded-md mb-4 text-ellipsis line-clamp-4">
                {reviewText}
            </p>

            <div className="flex items-center justify-start w-full">
                <img
                    src={logo}
                    alt="User Avatar"
                    className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                    <span className="font-semibold text-lg text-gray-800 block">{name}</span>
                    <span className="text-sm text-gray-600">{location}</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
