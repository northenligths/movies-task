import React from "react";

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-around">
      {pages.map((page, index) => {
        return (
          <div className="border border-white px-6 py-2">
            <button
              key={index}
              className="text-white"
              onClick={() => {
                setCurrentPage(page);
                console.log("page", page);
              }}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
