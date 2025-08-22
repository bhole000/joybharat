import { CircularProgress } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { Formik } from "formik";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { db } from "../../../firebase";
import { getFirebaseStorageUrl } from "../../../utils/getFirebaseStorageUrl";

const BlogSchema = Yup.object().shape({
  author: Yup.string().required(),
  blogimage: Yup.mixed().required(),
  content: Yup.string().required(),
  contentSort: Yup.string().required(),
  images: Yup.mixed().required(),
  timeformated: Yup.string().required(),
  title: Yup.string().required(),
});

function AddBlog() {
  const [imagesFile, setImagesFile] = useState([]);
  const [blogimageFile, setBlogimageFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddBlog = async (values, actions) => {
    try {
      setIsLoading(true);
      const blogimage = await getFirebaseStorageUrl(
        blogimageFile,
        `blogImages/${blogimageFile.name}`
      );
      const promises = Array.from(imagesFile).map((file) => {
        return getFirebaseStorageUrl(file, `blogImages/${file.name}`);
      });
      const images = await Promise.all(promises);
      values = { ...values, images, blogimage };
      const docRef = await addDoc(collection(db, "blogs"), values);
      console.log("Document written with ID: ", docRef.id);
      actions.resetForm();
      setImagesFile([]);
      setBlogimageFile();
      toast.success("Blog created successfully");
    } catch (error) {
      console.log("error----->", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-4 add-blog-wrapper contact-box">
      <Card className="border p-4 w-75">
        <div className="p-2">
          <h3>Add Blog</h3>
        </div>

        <Formik
          initialValues={{
            author: "",
            content: "",
            contentSort: "",
            timeformated: "",
            title: "",
          }}
          validationSchema={BlogSchema}
          onSubmit={handleAddBlog}
        >
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => {
            // console.log("errrors----->", errors);
            return (
              <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                  <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control
                      className="form-control"
                      name="title"
                      type="text"
                      placeholder="Enter title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? (
                      <div className="text-danger">{errors.title}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      className="form-control "
                      name="author"
                      type="text"
                      placeholder="Enter author name"
                      value={values.author}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.author && touched.author ? (
                      <div className="text-danger">{errors.author}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="blogimage">
                    <Form.Label>Blog Image</Form.Label>
                    <Form.Control
                      accept="image/*"
                      name="blogimage"
                      type="file"
                      value={values.blogimage}
                      onChange={(e) => {
                        setBlogimageFile(e.target.files[0]);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {errors.blogimage && touched.blogimage ? (
                      <div className="text-danger">{errors.blogimage}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="content">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      className="form-control"
                      name="content"
                      type="text"
                      placeholder="Enter blog content"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.content && touched.content ? (
                      <div className="text-danger">{errors.content}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contentSort">
                    <Form.Label>Sort Content</Form.Label>
                    <Form.Control
                      className="form-control"
                      name="contentSort"
                      type="text"
                      placeholder="Enter sort content"
                      value={values.contentSort}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.contentSort && touched.contentSort ? (
                      <div className="text-danger">{errors.contentSort}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="images">
                    <Form.Label>Blog images</Form.Label>
                    <Form.File
                      accept="image/*"
                      name="images"
                      multiple={true}
                      value={values.images}
                      onChange={(e) => {
                        setImagesFile(e.target.files);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      type="file"
                    />
                    {errors.images && touched.images ? (
                      <div className="text-danger">{errors.images}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="timeformated">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      className="form-control"
                      name="timeformated"
                      type="text"
                      placeholder="12 Dec 2012"
                      value={values.timeformated}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.timeformated && touched.timeformated ? (
                      <div className="text-danger">{errors.timeformated}</div>
                    ) : null}
                  </Form.Group>

                  <div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        "Add"
                      )}
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
}

export default AddBlog;
