import React from "react";
import classnames from "classnames";
import { DOTS, usePagination } from "../hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination justify-content-center", {
        [className]: className,
      })}
    >
      <li className="page-item">
        <button
          className="page-link"
          tabIndex="-1"
          aria-disabled="true"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="page-item dots" key={index}>
              <button className="page-link">&#8230;</button>
            </li>
          );
        }

        return (
          <li
            className={classnames("page-item", {
              active: pageNumber === currentPage,
            })}
            key={index}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li className="page-item">
        <button
          className="page-link"
          tabIndex="-1"
          aria-disabled="true"
          onClick={onNext}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
