import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <div
          class="animate-spin w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full"
          role="status"
          aria-label="loading"
        ></div>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
