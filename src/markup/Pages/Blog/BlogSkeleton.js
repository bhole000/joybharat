import { Skeleton } from "@mui/material";
import React from "react";

const BlogSkeleton = () => {
  return (
    <>
      <div className="card-container col-md-6 col-lg-4 col-sm-12 mb-5">
        <div className="dlab-card blog-grid">
          <div className="dlab-media">
            <Skeleton variant="rectangular" width={360} height={360} />
          </div>
          <div className="dlab-info">
            <div className="dlab-meta">
              <ul>
                <li className="post-date">
                  {/* <i className="las la-calendar-alt"></i> */}
                  <span>
                    <Skeleton width={50} />
                  </span>
                </li>
                <li className="post-user">
                  {/* <i className="las la-user"></i>By{" "} */}
                  <p>
                    <Skeleton width={100} />
                  </p>
                </li>
              </ul>
            </div>
            <h3 className="dlab-title">
              <Skeleton />
            </h3>
            <Skeleton />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSkeleton;
