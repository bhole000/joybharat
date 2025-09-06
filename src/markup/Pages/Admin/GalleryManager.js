import React, { useState } from "react";
import { db, storage } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const categories = [
  "marbles",
  "tiles",
  "granite",
  "accessories",
  "kitchen",
  "mirrors",
  "interior finish",
  "bathrooms",
];

const GalleryManager = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    try {
      setMessage("Uploading...");
      const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(percent));
        },
        (err) => {
          console.error("Upload error:", err);
          setMessage("Upload failed!");
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "blogs"), {
            title,
            description,
            category,
            blogimage: url,
            timeformated: new Date().toISOString(),
          });
          setMessage("Upload successful!");
          setTitle("");
          setDescription("");
          setFile(null);
          setProgress(0);
        }
      );
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("Upload failed!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Gallery Manager</h1>

      <div className="mb-3">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Image File:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>

      {progress > 0 && <div className="mt-2">Progress: {progress}%</div>}
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default GalleryManager;
