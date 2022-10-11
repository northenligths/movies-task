import React from "react";

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <div className="flex items-center justify-between flex-row">
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
