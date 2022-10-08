import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://movie-task.vercel.app/api/popular?page=1";
      try {
        const response = await axios.get(url);
        console.log("res", response.data.data.results);
        setMovies(response.data.data.results);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        toast.error("Failed");
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-center text-white font-bold text-3xl py-2">
        All Movies{" "}
      </h1>
      {loading ? (
        <div className="loader">
          <Oval color="black" secondaryColor="white" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-3">
          {movies?.map((movie) => {
            return (
              <div className="px-4">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                  alt=""
                />
                <h1 className="text-white sm:text-xl text-center py-1">
                  {movie?.title}
                </h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
