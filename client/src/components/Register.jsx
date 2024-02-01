import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to local storage
    if (!formData.name || !formData.email || !formData.address) {
        alert("Please fill in all the fields.");
        return;
      }
  
    localStorage.setItem("registeredUser", JSON.stringify(formData));

    // Redirect to login page
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
    <div className="form d-flex flex-column justify-content-center w-25 p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
        </div>

        <div className="d-flex justify-content-center">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
