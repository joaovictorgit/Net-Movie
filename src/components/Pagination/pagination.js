import React from "react";
import "./pagination-style.css";

const Pagination = (props) => {
  const { totalPosts, postsPerPage, setCurrentPage, currentPage } = props;
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          className={
            page === currentPage ? "active-pagination" : "btn-pagination"
          }
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
