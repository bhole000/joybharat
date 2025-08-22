import { Box, CircularProgress } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Dropzone from "react-dropzone-uploader";
import { toast } from "react-toastify";
import { db } from "../../../../firebase";
import { getFirebaseStorageUrl } from "../../../../utils/getFirebaseStorageUrl";

const AddVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleAddVideoSubmit = async (files, allFiles) => {
    try {
      setIsLoading(true);
      const promises = files.map((f) => {
        debugger;
        return getFirebaseStorageUrl(f.file, `videos/${f.meta.name}`);
      });
      allFiles.forEach((f) => f.remove());

      const videoUrlList = await Promise.all(promises);
      const docPromises = videoUrlList.map((url) => {
        return addDoc(collection(db, "videos"), { url });
      });
      await Promise.all(docPromises);
      toast.success("Videos uploaded successfully");
    } catch (error) {
      console.log("error----->", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      <Card className="border p-4 w-75">
        <div className="p-2">
          <h3>Add Video</h3>
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              onSubmit={handleAddVideoSubmit}
              accept="video/*"
              styles={{ dropzone: { overflow: "unset" } }}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default AddVideo;
