import Cookies from "js-cookie";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import ProtectedRoute from "./ProtectedRoute";
import SignIn from "../pages/signIn/SignIn";
import ProfilePage from "../pages/profilePage/ProfilePage";
import { verify } from "../services/api.service";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    index: true,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      // {
      //   path: "/chat",
      //   element: <Chat />,
      // },
      // {
      //   path: "/video",
      //   element: <Video />,
      // },
      // {
      //   path: "/room",
      //   element: <Room />,
      // },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
