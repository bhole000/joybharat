import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import useTablePagination from "../../../hooks/useTablePagination";
import { tablePaginationStyles } from "../../../utils/muiTable";

const Blogs = () => {
  const { page, rowsPerPage, handleChangeRowsPerPage, handleChangePage } =
    useTablePagination({});

  const [blogList, setBlogList] = useState([]);
  const [showDeleteConf, setShowDeleteConf] = useState(false);
  const [blogToBeDeleted, setBlogToBeDeleted] = useState();

  const handleOpenDeleteConf = (blog) => {
    setBlogToBeDeleted(blog);
    setShowDeleteConf(true);
  };

  const handleClose = () => {
    setBlogToBeDeleted();
    setShowDeleteConf(false);
  };

  const handleDeleteBlog = async () => {
    await deleteDoc(doc(db, "blogs", blogToBeDeleted.id));
    setBlogList((blogList) =>
      blogList.filter((blog) => blog.id !== blogToBeDeleted.id)
    );
    handleClose();
    toast.success("Blog deleted successfully");
  };

  const fetchBlogs = async () => {
    const query = collection(db, "blogs");
    const docs = await getDocs(query);
    let blogList = [];
    docs.forEach((doc) => {
      blogList.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setBlogList(blogList);
    console.log(blogList);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ p: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-primary text-white">
            <TableRow>
              <TableCell className="text-white">Title</TableCell>
              <TableCell align="right" className="text-white">
                Author
              </TableCell>
              <TableCell align="right" className="text-white">
                Created At
              </TableCell>
              <TableCell align="right" className="text-white">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogList
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((blog) => (
                <TableRow
                  key={blog.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {blog.title}
                  </TableCell>
                  <TableCell align="right">{blog.author}</TableCell>
                  <TableCell align="right">{blog.timeformated}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        handleOpenDeleteConf(blog);
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={blogList?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={tablePaginationStyles}
      />
      <Dialog
        open={showDeleteConf}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleDeleteBlog} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Blogs;
