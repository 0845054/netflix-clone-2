import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./routes/Router";

/*
https://www.figma.com/design/1Mf6jFMoOrqB2vlEMGQagr/Netflix-Design-System-2024-(Website-ver.)-🎥-(Community)?t=DNcZDJjRT8AzoJQ8-0
*/

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
