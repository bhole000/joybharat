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
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { db } from "../../../../firebase";
import { tablePaginationStyles } from "../../../../utils/muiTable";
import useTablePagination from "../../../../hooks/useTablePagination";

const Videos = () => {
  const { page, rowsPerPage, handleChangeRowsPerPage, handleChangePage } =
    useTablePagination({});

  const [videoList, setVideoList] = useState([]);
  const [showDeleteConf, setShowDeleteConf] = useState(false);
  const [videoToBeDeleted, setVideoToBeDeleted] = useState();

  const handleOpenDeleteConf = (video) => {
    setVideoToBeDeleted(video);
    setShowDeleteConf(true);
  };

  const handleClose = () => {
    setVideoToBeDeleted();
    setShowDeleteConf(false);
  };

  const handleDeleteVideo = async () => {
    await deleteDoc(doc(db, "videos", videoToBeDeleted.id));
    setVideoList((videoList) =>
      videoList.filter((video) => video.id !== videoToBeDeleted.id)
    );
    handleClose();
    toast.success("Video deleted successfully");
  };

  const fetchVideos = async () => {
    const query = collection(db, "videos");
    const docs = await getDocs(query);
    let videoList = [];
    docs.forEach((doc) => {
      videoList.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setVideoList(videoList);
    console.log(videoList);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ p: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-primary text-white">
            <TableRow>
              <TableCell className="text-white">Video</TableCell>
              <TableCell align="right" className="text-white">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videoList
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((video) => (
                <TableRow
                  key={video.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <video width="300" controls>
                      <source src={video.url} type="video/mp4" />
                      <source src="mov_bbb.ogg" type="video/ogg" />
                      Your browser does not support HTML video.
                    </video>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        handleOpenDeleteConf(video);
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
        count={videoList?.length}
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
          <Button onClick={handleDeleteVideo} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Videos;
