import React from "react";
import Header from "./Header";
import HotCoffe from "./HotCoffe/HotCoffe";
import IcedCoffe from "./IcedCoffe/IcedCoffe";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HotCoffe></HotCoffe>
      <IcedCoffe></IcedCoffe>
    </div>
  );
};

export default Home;
