import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router";

export const CoffeContext = createContext();

function App() {
  const [coffes, setCoffes] = useState([]);
  const [icedCoffes, setIcedCoffes] = useState([]);
  useEffect(() => {
    fetch("https://coffe-shop-server-site.vercel.app/hot_coffe")
      .then((res) => res.json())
      .then((data) => setCoffes(data));
  }, [coffes]);

  useEffect(() => {
    fetch("https://coffe-shop-server-site.vercel.app/iced_coffe")
      .then((res) => res.json())
      .then((data) => setIcedCoffes(data));
  }, [icedCoffes]);
  return (
    <CoffeContext.Provider value={{ coffes, icedCoffes }}>
      <RouterProvider router={router}></RouterProvider>
    </CoffeContext.Provider>
  );
}

export default App;
