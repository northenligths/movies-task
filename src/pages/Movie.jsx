import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  console.log("params", params);

  useEffect(() => {
    const fetchMovieById = async () => {
      const url = `https://movie-task.vercel.app/api/movie?movieId=${params.id}`;
      try {
        const response = await axios.get(url);
        console.log("movieById", response.data.data);
        setMovie([response.data.data]);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchMovieById();
  }, []);

  return (
    <div>
      {movie.map((item) => {
        return (
          <div className="flex items-center justify-around flex-col py-2 px-4">
            <img
              alt=""
              src={` https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            />
            <div>
              <ul className="text-white font-bold text-3xl">
                <li>About:</li>
                <li>{item.title}</li>
                <li>{item.release_date}</li>
                <li>{item.vote_average}</li>
                <li>{item.status}</li>
                <li>{item.production_companies[0].name} </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
