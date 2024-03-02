// Navbar.js
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-white mt-2">
        <div className="container w-75 d-flex align-items-center justify-content-between mt-4 bg-white">
          <div className="brand">
            <img
              src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
              alt="Logo"
            />
          </div>
          <div className="menu bg-white">
            <ul className="nav-links list-unstyled d-flex align-items-center gap-4 p-0 m-0 justify-content-between">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collect">Shop</Link>
              </li>
              <li>
                <Link to="/collect">Collection</Link>
              </li>

              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social-icons bg-white d-flex align-items-center gap-4 p-0 m-0 justify-content-between">
            <div className="search">
              <CiSearch size={22} />
            </div>

            <div className="s-icon d-flex align-items-center">
              <IoPeopleCircleOutline size={22} />
              <Link to="/login" className="ms-2 nav-links">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
