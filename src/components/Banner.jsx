const Banner = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="bg-orange-600 h-[396px] w-[1300px] flex flex-col justify-center items-center rounded-md">
            <span className="text-white text-4xl font-bold mb-6">
                Upcoming Pujas
            </span>

            <div className="flex gap-4">
                <button className="px-6 py-2 border-2 border-white text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition-colors duration-300 rounded-md">
                    Closing Soon
                </button>
                <button className="px-6 py-2 border-2 border-white text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition-colors duration-300 rounded-md">
                    This Week
                </button>
                <button className="px-6 py-2 border-2 border-white text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition-colors duration-300 rounded-md">
                    All
                </button>
            </div>
        </div>
        </div>
    );
}

export default Banner;
