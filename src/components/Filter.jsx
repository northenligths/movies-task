import React from "react";

const Filter = ({ movies, setSearchValue, searchValue }) => {
  return (
    <div>
      <select
        className="px-4 py-1 mx-2 my-4 xl:w-52 sm:w-36"
        onChange={(e) => setSearchValue(e.target.value)}
      >
        <option>Sort By Release Date</option>;
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.release_date}>
              {movie.release_date}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
