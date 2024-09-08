import React from "react";
import Navbar from "../src/components/Navbar"; // Import the Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar will appear on every page */}
      <main>
        {children} {/* This is where the page content will be rendered */}
      </main>
    </div>
  );
};

export default Layout;
