import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 h-14 flex items-center justify-between shadow-md mb-10 px-5">
      <img src="https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png" alt="" className="h-16"/>
      <ul className="flex justify-end items-center gap-10 px-4 font-semibold text-white">
        <li className="hover:underline"><Link to="/">Home</Link></li>
        <li className="hover:underline"><Link to="/about">About</Link></li>
        <li className="hover:underline"><Link to="/contact">Contact</Link></li>
        <li className="hover:underline"><Link to="/profile/sanjay">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
