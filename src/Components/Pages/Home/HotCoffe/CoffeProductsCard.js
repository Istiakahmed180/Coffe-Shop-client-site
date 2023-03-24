import React from "react";
import { Link, useLocation } from "react-router-dom";

const CoffeProductsCard = ({ coffe }) => {
  const { _id, image, title, ingredients } = coffe;

  const { pathname } = useLocation();

  const handleDelete = (coffe) => {
    const agree = window.confirm(`Are you sure you want to delete this item`);
    if (agree) {
      fetch(
        `https://coffe-shop-server-site.vercel.app/hot_coffe/${coffe._id}`,
        {
          method: "delete",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item deleted successfull");
          }
        });
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="container">
        <div className="max-w-sm w-full bg-[#2D2A28] shadow-lg rounded-xl p-6">
          <div className="flex flex-col ">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <div className="absolute flex flex-col top-0 right-0 p-3">
                  <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <img
                  src={image}
                  alt="Just a flower"
                  className="  w-96 h-64 rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-400 whitespace-nowrap mr-3">
                      4.60
                    </span>
                    <span className="mr-2 text-gray-400">Bangladesh</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                      {title}
                    </h2>
                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">
                  {ingredients[0]}
                </div>
                <div className="lg:flex  py-4  text-sm text-gray-600">
                  <div className="flex-1 inline-flex items-center  mb-3">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul className="flex flex-row justify-center items-center space-x-2">
                        <li className="">
                          <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                            <Link
                              to="#blue"
                              className="block w-3 h-3 bg-blue-600 rounded-full"
                            ></Link>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                            <Link
                              to="#yellow"
                              className="block w-3 h-3  bg-yellow-400 rounded-full"
                            ></Link>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                            <Link
                              to="#red"
                              className="block w-3 h-3  bg-red-500 rounded-full"
                            ></Link>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                            <Link
                              to="#green"
                              className="block w-3 h-3  bg-green-500 rounded-full"
                            ></Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1 inline-flex items-center mb-3">
                    <span className="text-secondary whitespace-nowrap mr-3">
                      Size
                    </span>
                    <div className="cursor-pointer text-gray-400 ">
                      <span className="hover:text-purple-500 p-1 py-0">S</span>
                      <span className="hover:text-purple-500 p-1 py-0">M</span>
                      <span className="hover:text-purple-500 p-1 py-0">L</span>
                      <span className="hover:text-purple-500 p-1 py-0">XL</span>
                    </div>
                  </div>
                </div>
                {pathname.includes("/hot_coffes") && (
                  <div className="flex justify-around">
                    <Link to={`/hot_coffe/${_id}`}>
                      <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium  bg-[#7E4F2E] px-3 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 ">
                        <span>Preview</span>
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(coffe)}
                      className="transition ease-in duration-300 inline-flex items-center text-sm font-medium  bg-red-400 px-3 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 "
                    >
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeProductsCard;
