import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home" className="mr-5">
                  Home
                </Link>
                <Link to="/destination" className="mr-5">
                  Destination
                </Link>
              </li>
              <li>
                <Link to="/booking" className="mr-5">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/blog" className="mr-5">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="mr-5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="mr-5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl ml-10">
            <img className="w-24" src={Logo} alt="" />
          </Link>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="search your destination"
            className="input input-bordered mr-10"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home" className="mr-5">
                Home
              </Link>
              <Link to="/destination" className="mr-5">
                Destination
              </Link>
            </li>
            <li>
              <Link to="/booking" className="mr-5">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/blog" className="mr-5">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="mr-5">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mr-5">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-10">
          {user && user.uid ? (
            <Link onClick={handleLogOut} className="btn">
              Log Out
            </Link>
          ) : (
            <>
              <Link to="/logIn" className="btn mr-3">
                Log In
              </Link>
              <Link to="/signUp" className="btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
