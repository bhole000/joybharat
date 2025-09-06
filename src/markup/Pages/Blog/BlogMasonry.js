import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import Header from "./../../Layout/Header";
import Footer2 from "./../../Layout/Footer2";
import PageTitle from "./../../Layout/PageTitle";
import { db } from "./../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import bgimg from "./../../../images/bg-view.png";
import Pagination from "../../../utils/Pagination";
import BlogSkeleton from "./BlogSkeleton";

const masonryOptions = { transitionDuration: 0 };
const imagesLoadedOptions = { background: ".my-bg-image-el" };
const PageSize = 6;

const categories = [
  "all",
  "marbles",
  "tiles",
  "granite",
  "accessories",
  "kitchen",
  "interior finish",
  "bathrooms",
  
];

const BlogMasonry = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchBlogs = async () => {
    setIsLoading(true);
    const query = collection(db, "blogs");
    const docs = await getDocs(query);
    const blogList = docs.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
    }));
    // Sort latest first
    blogList.sort((a, b) => new Date(b.data.timeformated).getTime() - new Date(a.data.timeformated).getTime());
    setBlogs(blogList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filtered blogs based on selected category
  const filteredBlogs = blogs.filter(blog => 
    filter === "all" || (blog.data.category && blog.data.category.toLowerCase() === filter.toLowerCase())
  );

  // Reset page when filter changes
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  // Slice blogs for pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredBlogs.slice(firstPageIndex, lastPageIndex);
  }, [filteredBlogs, currentPage]);

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <PageTitle motherMenu="Gallery" activeMenu="Gallery" />
        <section className="content-inner">
          <div className="container">
            {/* Filter Bar */}
            <div className="text-center mb-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`btn m-2 ${filter === cat ? "btn-dark" : "btn-outline-dark"}`}
                  onClick={() => handleFilterChange(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Gallery Masonry */}
            <div id="masonry" data-column-width="10">
              <Masonry
                className="my-gallery-class row g-4"
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={imagesLoadedOptions}
              >
                {isLoading
                  ? Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
                  : currentTableData.map((blog, index) => (
                      <div className="col-md-6 col-lg-4 col-sm-12 mb-5" key={index}>
                        <div className="dlab-card blog-grid">
                          <div className="dlab-media">
                            <img src={blog.data.blogimage} alt={blog.data.title} />
                          </div>
                          <div className="dlab-info text-center">
                            <h3 className="dlab-title">{blog.data.title}</h3>
                            <p>{blog.data.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
              </Masonry>
            </div>

            {/* Pagination */}
            {filteredBlogs.length > PageSize && (
              <nav aria-label="Page navigation example">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={filteredBlogs.length}
                  pageSize={PageSize}
                  onPageChange={page => setCurrentPage(page)}
                />
              </nav>
            )}
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
