import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import Header from "./../../Layout/Header";
import Footer2 from "./../../Layout/Footer2";
import PageTitle from "./../../Layout/PageTitle";
// import { Pagination } from "./BlogGrid";
import { db } from "./../../../firebase";
import { collection, getDocs } from "firebase/firestore";

//images/
// import grid1 from "./../../../images/blog/blog-grid/pic1.jpg";
// import grid4 from "./../../../images/blog/blog-grid/pic4.jpg";
// import grid5 from "./../../../images/blog/blog-grid/pic5.jpg";
// import grid6 from "./../../../images/blog/blog-grid/pic6.jpg";
// import grid7 from "./../../../images/blog/blog-grid/pic7.jpg";
// import grid8 from "./../../../images/blog/blog-grid/pic8.jpg";
import bgimg from "./../../../images/bg-view.png";
import Pagination from "../../../utils/Pagination";
import BlogSkeleton from "./BlogSkeleton";

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

const PageSize = 6;

const BlogMasonry = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogs.slice(firstPageIndex, lastPageIndex);
  }, [blogs, currentPage]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    const query = collection(db, "blogs");
    const docs = await getDocs(query);
    console.log(docs);
    const blogList = [];
    docs.forEach((doc) => {
      const blogObj = {
        id: doc.id,
        data: doc.data(),
      };
      blogList.push(blogObj);
    });
    setBlogs(blogList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <PageTitle motherMenu="Blog" activeMenu="Blog" />
        {/*  Inner Page Banner */}
        <section className="content-inner">
          <div className="container">
            <div className="" id="masonry" data-column-width="10">
              <Masonry
                className={"my-gallery-class"} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
              >
                {isLoading
                  ? [1, 2, 3].map((i) => {
                      return <BlogSkeleton key={i} />;
                    })
                  : currentTableData.map((data, index) => (
                      <div
                        className="card-container col-md-6 col-lg-4 col-sm-12 mb-5"
                        key={index}
                      >
                        <div className="dlab-card blog-grid">
                          <div className="dlab-media">
                            <img src={data.data.blogimage} alt="" />
                          </div>
                          <div className="dlab-info">
                            <div className="dlab-meta">
                              <ul>
                                <li className="post-date">
                                  <i className="las la-calendar-alt"></i>
                                  <span>{data.data.timeformated}</span>
                                </li>
                                <li className="post-user">
                                  <i className="las la-user"></i>By{" "}
                                  <Link to={"#"}>{data.data.author}</Link>
                                </li>
                              </ul>
                            </div>
                            <h3 className="dlab-title">
                              <Link
                                to={{
                                  pathname: "/blog-details/" + data.id,
                                  state: data.data,
                                }}
                              >
                                {data.data.title}
                              </Link>
                            </h3>
                            <p>{data.data.contentSort}</p>
                            <div className="dlab-readmore">
                              <Link
                                to={{
                                  pathname: "/blog-details/" + data.id,
                                  state: data.data,
                                }}
                                className="readmore"
                              >
                                <i className="las la-plus"></i> Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </Masonry>
            </div>
            <nav aria-label="Page navigation example">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={blogs.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </nav>
          </div>
        </section>
        <div>
          <img src={bgimg} className="bg-view" alt="" />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default BlogMasonry;
