import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeContext } from "../../../../App";
import IcedCoffeProductsCard from "./IcedCoffeProductsCard";

const AllIcedCoffes = () => {
  const { icedCoffes } = useContext(CoffeContext);

  return (
    <div className="ml-4">
      <div className="mx-10 mt-5 ">
        <h1 className="font-lobster text-5xl text-center mb-10 text-white">
          All Cold Coffes
        </h1>
        <div className="grid grid-cols-3 gap-5 ">
          {icedCoffes?.coffes?.map((coffe) => (
            <IcedCoffeProductsCard
              key={coffe._id}
              coffe={coffe}
            ></IcedCoffeProductsCard>
          ))}
        </div>

        <div className="mt-40 mb-20">
          <h1 className="font-lobster text-3xl text-center mt-10 text-[#C29468]">
            Create A Post Now
          </h1>
          <div className="flex justify-center">
            <Link to={"/iced_post"}>
              <button className="bg-orange-500 text-neutral-300 px-3 py-1 mt-4 rounded-lg font-bold uppercase">
                Post Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllIcedCoffes;
