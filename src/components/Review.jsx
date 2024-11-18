import { useState, useEffect } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import ReviewCard from "./ReviewCard";

const dummyText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi excepturi sunt molestiae aperiam atque, labore possimus corrupti commodi voluptates, recusandae reiciendis laborum numquam eum iusto dolore vitae suscipit nesciunt nobis?";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(1);
  const reviews = [
    { name: "Jai Raj Yadav", location: "Delhi", reviewText: dummyText },
    { name: "Priya Sharma", location: "Mumbai", reviewText: dummyText },
    { name: "Arun Kumar", location: "Kolkata", reviewText: dummyText },
    { name: "Nisha Singh", location: "Bangalore", reviewText: dummyText },
    { name: "Rajesh Verma", location: "Chennai", reviewText: dummyText },
  ];

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setReviewsPerPage(3);
    } else if (window.innerWidth >= 768) {
      setReviewsPerPage(2);
    } else {
      setReviewsPerPage(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - reviewsPerPage < 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Reviews & Ratings</h1>
        <p className="text-xl text-gray-600">
          Read what our beloved devotees have to say about Sri Mandir
        </p>
      </div>

      <div className="flex justify-center items-center mb-8 relative">
        <button
          onClick={handlePrevious}
          className="absolute left-4 sm:left-4 flex items-center justify-center text-3xl font-bold text-gray-800 p-2 rounded-full bg-white hover:bg-gray-200 transition"
        >
          <HiArrowLeft />
        </button>

        <div className="flex gap-4 overflow-hidden justify-center sm:gap-6 md:gap-8">
          {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review, idx) => (
            <div key={idx} className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[30%]">
              <ReviewCard
                name={review.name}
                location={review.location}
                reviewText={review.reviewText}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-4 flex items-center justify-center text-3xl font-bold text-gray-800 p-2 rounded-full bg-white hover:bg-gray-200 transition"
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Review;
