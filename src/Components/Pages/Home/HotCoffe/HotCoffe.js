import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeContext } from "../../../../App";
import CoffeProductsCard from "./CoffeProductsCard";

const HotCoffe = () => {
  const { coffes } = useContext(CoffeContext);
  return (
    <div className="m-20">
      <h1 className="font-lobster text-5xl text-center mt-20 mb-10 text-white">
        Hot Coffes
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {coffes?.sortCoffes?.map((coffe) => (
          <CoffeProductsCard key={coffe._id} coffe={coffe}></CoffeProductsCard>
        ))}
      </div>
      <Link to={"/hot_coffes"} className="flex justify-end mr-6 mt-2">
        <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#7E4F2E] px-3 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 ">
          <span>See All</span>
        </button>
      </Link>
    </div>
  );
};

export default HotCoffe;
