import React, { useState, useEffect } from "react";
import { Router, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data from local storage
    const registeredUser = localStorage.getItem("registeredUser");
    if (registeredUser) {
      const { name, email } = JSON.parse(registeredUser);
      // Set initial values for login form
      setFormData({
        name:name||"",
        email: email || ""
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here

    // For demonstration purposes, let's assume login is successful
    // Redirect the user to the Lists page
    
    navigate("/");
  };

  return (
    <div>
    <Navbar/>
    <div className="form d-flex flex-column justify-content-center w-25 p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="d-flex justify-content-center">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
