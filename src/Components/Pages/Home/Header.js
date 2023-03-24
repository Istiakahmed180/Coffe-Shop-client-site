import React from "react";
import HomeBg from "../../../assets/home-bg.png";

const Header = () => {
  return (
    <div
      className="h-screen bg-cover relative"
      style={{ backgroundImage: `url(${HomeBg})` }}
    >
      <div className="absolute text-white top-48 left-32 ">
        <p className="text-3xl mb-5 font-lobster">Welcome To Coffera</p>
        <div className="text-5xl mb-5 font-lobster">
          <span>Discover Amazing Coffe</span>
          <br />
          <span>House & Get Energy</span>
        </div>
        <div>
          <span>
            There are many variations of passages aavaliable but the majority
            have suffered alternation in
          </span>
          <br />
          <span>some from by injected humour or randomised words.</span>
        </div>
        <div className="mt-4">
          <button className="bg-[#7E4F2E] text-white px-3 py-3 rounded-lg font-bold uppercase">
            Check Menu
          </button>
          <button className="text-[#7E4F2E] ml-5 border border-[#7E4F2E] hover:bg-[#7E4F2E] hover:text-white font-bold uppercase px-3 py-3 rounded-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            Book Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
