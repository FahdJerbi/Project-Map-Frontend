import React from "react";
import Navbar from "../client-map-pathselector/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>

      {/* <h1> this is Login comp</h1> */}
    </div>
  );
};

export default Layout;
