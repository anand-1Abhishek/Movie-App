import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Lists = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setMovies(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <Navbar/>
      <h1
        className="display-3 mt-3 text-primary-emphasis d-flex justify-content-start"
        style={{ marginLeft: "1vw" }}
      >
        Watch Your Favourite Movies
      </h1>
      <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded w-80" >
      {movies.map((movie) => (
        <div className="card mt-5" key={movie.show.id}>
          <div className="card-body">
            <img
              src={movie.show.image ? movie.show.image.medium : "https://via.placeholder.com/210x295"}
              className="rounded float-start"
              style={{ width: "15vw", height: "35vh" }}
              alt="..."
            />
            <div style={{ marginLeft: "17vw" }}>
              <h5 className="card-title mt-5">{movie.show.name}</h5>
              <p className="card-text">{movie.show.genres.join(", ")}</p>
              <p className="card-text">
              {movie.show.runtime} Mins | {movie.show.rating.average}⭐
              </p>
              <Link to={`/movie-detail/${movie.show.id}`} className="btn btn-primary">
                View More
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Lists;
