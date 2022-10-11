import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(6);

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
        alert(err.message);
      }
    };
    fetchMovies();
  }, []);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

  const filteredMovies = currentMovies.filter((movie) => {
    if (searchValue === "") {
      return movie;
    } else {
      // console.log("searchValue", searchValue);
      return movie?.release_date?.includes(searchValue);
    }
  });

  return (
    <div>
      <h1 className="text-center text-white font-bold text-3xl py-2">
        All Movies{" "}
      </h1>
      <Filter
        movies={movies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {loading ? (
        <div className="loader">
          <Oval color="black" secondaryColor="white" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-3">
          {filteredMovies?.map((movie) => {
            return (
              <div
                className="px-4 cursor-pointer"
                onClick={() => navigate(`movie/${movie.id}`)}
              >
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
      <Pagination
        totalMovies={movies.length}
        moviesPerPage={moviesPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Movies;
