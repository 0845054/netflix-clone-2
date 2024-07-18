import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const getAccessToken = () => {
  return Cookies.get("token");
};

const auth = async () => {
  // Send API request to verify JWT
  // Return a promise that resolves to true if the token is valid, false otherwise
  return !!getAccessToken();
};

const ProtectedRoute = () => {
  const isAuthenticated = auth();
  console.log("In protected route.");
  console.log("isAuthenticated = " + isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
