import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Posts = () => {

  const posts = [
    { 
      title: "Dev Diwali", 
      location: "Maharashtra", 
      date: "18 Nov 2024", 
      numberDevotee: "55033", 
      description: "Celebrating Dev Diwali with thousands of devotees in Maharashtra!"
    },
    { 
      title: "Grand Festival", 
      location: "Delhi", 
      date: "25 Dec 2024", 
      numberDevotee: "12000", 
      description: "A grand festival gathering for the New Year celebrations!"
    },
    { 
      title: "Blessing Ceremony", 
      location: "Kolkata", 
      date: "12 Jan 2025", 
      numberDevotee: "8000", 
      description: "A blessing ceremony for prosperity and peace in the new year."
    },
    { 
      title: "Sacred Rituals", 
      location: "Chennai", 
      date: "5 Feb 2025", 
      numberDevotee: "15000", 
      description: "Sacred rituals for spiritual growth and well-being."
    },
    { 
      title: "Annual Gathering", 
      location: "Bangalore", 
      date: "10 Mar 2025", 
      numberDevotee: "22000", 
      description: "Annual gathering for spiritual seekers from all over the country."
    },
  ];

  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setPostsPerPage(3);
    } else {
      setPostsPerPage(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextPost = () => {
    setCurrentPostIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex + postsPerPage > posts.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePreviousPost = () => {
    setCurrentPostIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      if (prevIndexAdjusted < 0) {
        return posts.length - postsPerPage;
      }
      return prevIndexAdjusted;
    });
  };

  return (
    <div className="flex justify-center items-center mb-8 relative">
      <button
        onClick={handlePreviousPost}
        className="absolute left-4 sm:left-4 flex items-center justify-center text-3xl font-bold text-gray-800 p-2 rounded-full bg-white hover:bg-gray-200 transition"
      >
        <HiArrowLeft />
      </button>

      <div className="flex gap-4 overflow-hidden justify-center sm:gap-6 md:gap-8">
        {posts
          .slice(currentPostIndex, currentPostIndex + postsPerPage) // Slice the posts to display
          .map((post, idx) => (
            <div key={idx} className={`w-[100%] ${postsPerPage === 3 ? "sm:w-[30%]" : "sm:w-[100%]"}`}>
              <PostCard
                title={post.title}
                location={post.location}
                date={post.date}
                numberDevotee={post.numberDevotee}
              />
            </div>
          ))}
      </div>

      <button
        onClick={handleNextPost}
        className="absolute right-4 sm:right-4 flex items-center justify-center text-3xl font-bold text-gray-800 p-2 rounded-full bg-white hover:bg-gray-200 transition"
      >
        <HiArrowRight />
      </button>
    </div>
  );
};

export default Posts;
