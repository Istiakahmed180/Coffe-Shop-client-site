import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import AllCoffes from "../Components/Pages/Home/HotCoffe/AllCoffes";
import HotCoffeDetails from "../Components/Pages/Home/HotCoffe/HotCoffeDetails";
import AllIcedCoffes from "../Components/Pages/Home/IcedCoffe/AllIcedCoffes";
import IcedCoffeDetails from "../Components/Pages/Home/IcedCoffe/IcedCoffeDetails";
import Login from "../Components/Pages/Login/Login";
import IcedPost from "../Components/Pages/Post/IcedPost";
import Post from "../Components/Pages/Post/Post";
import Signup from "../Components/Pages/Signup/Signup";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/hot_coffes",
        element: (
          <PrivateRoute>
            <AllCoffes></AllCoffes>
          </PrivateRoute>
        ),
      },
      {
        path: "/hot_coffe/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-shop-server-site.vercel.app/hot_coffe/${params.id}`
          ),
        element: <HotCoffeDetails></HotCoffeDetails>,
      },
      {
        path: "/iced_coffes",
        element: (
          <PrivateRoute>
            <AllIcedCoffes></AllIcedCoffes>
          </PrivateRoute>
        ),
      },
      {
        path: "/iced_coffe/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-shop-server-site.vercel.app/iced_coffe/${params.id}`
          ),
        element: <IcedCoffeDetails></IcedCoffeDetails>,
      },
      {
        path: "/post",
        element: <Post></Post>,
      },
      {
        path: "/iced_post",
        element: <IcedPost></IcedPost>,
      },
    ],
  },
]);

export default router;
