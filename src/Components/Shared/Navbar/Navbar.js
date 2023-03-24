import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../assets/logo2.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="bg-[#1B1B1B] sticky top-0 z-50">
      <div className="flex justify-around items-center font-medium">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to={"/"}>
            {" "}
            <img src={logo2} alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div
            className="text-3xl md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8 font-display text-white">
          <li>
            <Link className="py-6 px-3 inline-block" to={"/home"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/features"}>
              Features
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/testimonials"}>
              Testimonials
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          {user?.uid ? (
            <div className="flex space-x-2">
              {user?.photoURL === null && (
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
              {user?.photoURL && (
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user?.photoURL}
                  alt="Bordered avatar"
                />
              )}
              <button
                onClick={handleSignOut}
                className="bg-[#7E4F2E] text-white px-3 py-2 rounded-full"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-[#7E4F2E] text-white px-3 py-2 rounded-full">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navbar */}
        <ul
          className={`md:hidden bg-[#1B1B1B] z-50 text-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link className="py-6 px-3 inline-block" to={"/home"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/features"}>
              Features
            </Link>
          </li>
          <li>
            <Link className="py-6 px-3 inline-block" to={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          <div className="py-5">
            {user?.uid ? (
              <div className="flex space-x-2">
                {user?.photoURL === null && (
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
                {user?.photoURL && (
                  <img
                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src={user?.photoURL}
                    alt="Bordered avatar"
                  />
                )}
                <button
                  onClick={handleSignOut}
                  className="bg-[#7E4F2E] text-white px-4 py-2 rounded-full"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="bg-[#7E4F2E] text-white px-4 py-2 rounded-full">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
