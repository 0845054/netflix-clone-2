import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const getAccessToken = () => {
  return Cookies.get("token");
};

const verify = () => {
  // Send API request to verify JWT
  // Return a promise that resolves to true if the token is valid, false otherwise
  console.log("Verifying...");
  return !!getAccessToken();
};

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // const res = await verify();
        console.log(verify());
        setIsAuthenticated(verify());
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return isAuthenticated;
};
export default useAuth;
