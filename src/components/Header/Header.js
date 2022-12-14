import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import UserIcon from "../../assets/images/icons/free-user-icon-3296-thumb.png";

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
            <Link onClick={handleLogOut} className="btn mr-3 hidden">
              Log Out
            </Link>
          ) : (
            <>
              <Link to="/logIn" className="btn mr-3">
                Log In
              </Link>
              <Link to="/signUp" className="btn mr-3">
                Sign Up
              </Link>
            </>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              {user?.photoURL ? (
                <img
                  className="w-1/2 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <img src={UserIcon} alt="" />
              )}
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact w-64 p-2 shadow bg-dark text-dark-content"
            >
              <div className="card-body">
                <img
                  className="w-1/2 rounded-full mx-auto"
                  src={user.photoURL}
                  alt=""
                />
                <h3 className="card-title">{user.displayName}</h3>
                <small className="text-xs">ID : {user.uid}</small>
                <button className="btn btn-light rounded-full">
                  View Profile
                </button>
                <div className="divider mt-5"></div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
