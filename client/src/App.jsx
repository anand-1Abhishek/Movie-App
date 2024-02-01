import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lists from "./components/Lists";
import MovieDetail from "./components/MovieDetail";
import BookMovie from "./components/BookMovie"

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";



const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" exact element={<Lists />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />}  />
        <Route path="/book-movie" element={<BookMovie />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;
