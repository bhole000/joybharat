import { useState } from "react";

const useTablePagination = ({ defaultPage = 0, defaultRowsPerPage = 5 }) => {
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return { page, rowsPerPage, handleChangeRowsPerPage, handleChangePage };
};

export default useTablePagination;
