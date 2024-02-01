import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (you can implement your own logic)
    const userLoggedIn = localStorage.getItem("registeredUser");
    // console.log(userLoggedIn)
    if (userLoggedIn) {

      setIsLoggedIn(true);
    }
    console.log(isLoggedIn)
  }, []);

  const handleLogout = () => {
    // Clear localStorage and set isLoggedIn to false
    localStorage.removeItem("registeredUser");
    setIsLoggedIn(false);

    // Redirect to home or login page
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/" className="navbar-brand text-white">
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <ul className="navbar-nav end" style={{marginLeft:"auto"}}>
                <li className="nav-item">
                  <button className="btn btn-link text-white" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav end" style={{marginLeft:"auto"}}>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link text-white">
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
