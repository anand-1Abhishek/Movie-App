import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BookMovie = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleDropdownSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error("Please fill in all the fields.");
      return;
    }
  
    toast.success("Movie booked successfully!");
    navigate("/");

      // setTimeout(() => {
      // }, 1500);
  };

  useEffect(() => {
    // Get movie name from sessionStorage
    const movieName = sessionStorage.getItem("movieName");

    // Get name and email address from localStorage
    const user = JSON.parse(localStorage.getItem("registeredUser"));
    const userName = user ? user.name : "";
    const userEmail = user ? user.email : "";

    // Set the values in the form fields
    document.getElementById("floatingInput").value = movieName || "";
    document.getElementById("floatingPassword").value = userName || "";
    document.getElementById("floatingEmail").value = userEmail || "";
  }, []);

  return (
    <div className="form d-flex flex-column justify-content-center w-25 p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            readOnly
          />
          <label for="floatingInput">Movie Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            readOnly
          />
          <label for="floatingPassword">User Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingEmail"
            placeholder="Password"
            readOnly
          />
          <label for="floatingPassword">Email</label>
        </div>
        <div className="form-floating mb-3">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className="form-control"
            placeholderText="Select Date"
          />
          <label htmlFor="datepicker"></label>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Select Time"
            value={selectedTime}
            readOnly // Make it read-only since you're setting the value programmatically
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("10AM")}
              >
                10AM
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("1PM")}
              >
                1PM
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("3PM")}
              >
                3PM
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("5PM")}
              >
                5PM
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("7PM")}
              >
                7PM
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDropdownSelect("10PM")}
              >
                10PM
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <input class="btn btn-primary" type="submit" value="Pay Now" />
        </div>
      </form>
    </div>
  );
};

export default BookMovie;
