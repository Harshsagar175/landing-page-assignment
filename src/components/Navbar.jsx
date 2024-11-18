import React, { useState } from "react";
import { MdOutlineTempleHindu } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";  // Importing the down arrow icon

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isTemplesOpen, setIsTemplesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const submitHandler = (buttonName) => {
    console.log(`${buttonName} button was clicked`);
  };

  return (
    <>
      <div className="p-4 flex justify-between items-center bg-gray-100 hidden md:flex">
        <div>
          <button
            onClick={() => submitHandler("Sri Mandir")}
            className="px-4 py-2 text-black rounded-md flex items-center gap-2 hover:outline hover:outline-4 hover:outline-white"
          >
            <MdOutlineTempleHindu className="text-2xl" />
            <span>Sri Mandir</span>
          </button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => submitHandler("Home")}
            className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white"
          >
            Home
          </button>
          <button
            onClick={() => submitHandler("Puja")}
            className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white"
          >
            Puja
          </button>
          <button
            onClick={() => submitHandler("Pachang")}
            className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white"
          >
            Pachang
          </button>

          <div className="relative">
            <button
              onClick={() => {
                setIsTemplesOpen(!isTemplesOpen);
                submitHandler("Temples");
              }}
              className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white flex items-center gap-2"
            >
              Temples
              <FiChevronDown className="text-xl" /> {/* Adding the down arrow */}
            </button>
            {isTemplesOpen && (
              <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-48">
                <button
                  onClick={() => submitHandler("Temple 1")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Temple 1
                </button>
                <button
                  onClick={() => submitHandler("Temple 2")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Temple 2
                </button>
                <button
                  onClick={() => submitHandler("Temple 3")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Temple 3
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => submitHandler("Library")}
            className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white"
          >
            Library
          </button>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <button
              onClick={() => {
                setIsLanguageOpen(!isLanguageOpen);
                submitHandler("Language");
              }}
              className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white flex items-center gap-2"
            >
              Language
              <FiChevronDown className="text-xl" /> {/* Adding the down arrow */}
            </button>
            {isLanguageOpen && (
              <div className="absolute mt-2 bg-white border rounded-md shadow-lg">
                <button
                  onClick={() => submitHandler("English")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => submitHandler("Hindi")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Hindi
                </button>
                <button
                  onClick={() => submitHandler("Telugu")}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Telugu
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => submitHandler("Profile")}
            className="px-4 py-2 text-black rounded-md hover:outline hover:outline-4 hover:outline-white"
          >
            Profile
          </button>
        </div>
      </div>

      <div className="md:hidden p-4 flex justify-between items-center bg-gray-100">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-black text-2xl"
        >
          <HiMenu />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="w-64 bg-white p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl text-black absolute top-4 right-4"
            >
              <HiX />
            </button>
            <div>
              <button
                onClick={() => submitHandler("Sri Mandir")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                <MdOutlineTempleHindu className="inline text-2xl" />
                Sri Mandir
              </button>
              <button
                onClick={() => submitHandler("Home")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                Home
              </button>
              <button
                onClick={() => submitHandler("Puja")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                Puja
              </button>
              <button
                onClick={() => submitHandler("Pachang")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                Pachang
              </button>
              <button
                onClick={() => submitHandler("Library")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                Library
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsTemplesOpen(!isTemplesOpen)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                >
                  Temples
                  <FiChevronDown className="inline text-xl" /> {/* Adding the down arrow */}
                </button>
                {isTemplesOpen && (
                  <div className="mt-2 bg-white border rounded-md shadow-lg">
                    <button
                      onClick={() => submitHandler("Temple 1")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Temple 1
                    </button>
                    <button
                      onClick={() => submitHandler("Temple 2")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Temple 2
                    </button>
                    <button
                      onClick={() => submitHandler("Temple 3")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Temple 3
                    </button>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                >
                  Language
                  <FiChevronDown className="inline text-xl" /> {/* Adding the down arrow */}
                </button>
                {isLanguageOpen && (
                  <div className="mt-2 bg-white border rounded-md shadow-lg">
                    <button
                      onClick={() => submitHandler("English")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => submitHandler("Hindi")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Hindi
                    </button>
                    <button
                      onClick={() => submitHandler("Telugu")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Telugu
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => submitHandler("Profile")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
