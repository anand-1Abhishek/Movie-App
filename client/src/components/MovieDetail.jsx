import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(response.data);

        // Set movie name in sessionStorage
        sessionStorage.setItem("movieName", response.data.name);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const sanitizedSummary = movie.summary.replace(/<\/?([pb])>/g, "");

  return (
    <div>
      <Navbar/>
    <div className="d-flex">
      
      <img
        src={
          movie.image
            ? movie.image.original
            : "https://via.placeholder.com/800x1200"
        }
        className="img-fluid w-50"
        style={{ width: "50vw", height: "100vh" }}
        alt={movie.name}
      />
      <div className="d-flex flex-column">
        <h1 className="display-3 ml-1 mb-5 mt-3 d-flex justify-content-center">
          {movie.name}
        </h1>
        <p style={{ marginLeft: "2vw", marginRight: "2vw" }}>{sanitizedSummary}</p>
        <div>
          <Link to="/book-movie" className="btn btn-dark btn-lg" style={{ marginLeft: "5vw", marginTop: "4vh" }}>
            Book Tickets
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetail;
