import { useState, CSSProperties, useEffect } from "react";
import "./subblog.css";
import SubBlogs from "./SubBlogs";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { FadeLoader } from "react-spinners";
import Navbar from "../page/navbar/Navbar";
import { getBlogData } from "../features/blog/blogSlice";
import Footer from "../page/footer/Footer";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="heading-container mb-2 mt-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-2 py-4 fs-5">
          <div className="mt-1 fw-bold">
            <Link to="/" className="links-unstyled">
              Home
            </Link>{" "}
            <span> / </span>
            <Link to="#" className="links-unstyled">
              Blogs
            </Link>
          </div>
        </div>
      </div>
      {/* heading */}
      <div className="c mt-5">
        <hr className="hr-left" />
        <h3 className="heading fw-bold">Explore Our Blogs</h3>
        <hr className="hr-right" />
      </div>

      <div className="container mt-5 mx-auto w-75">
        <div className="row justify-content-center">
          {loading ? (
            <div className="text-center d-block mx-auto ">
              <FadeLoader size={50} height={50} />
            </div>
          ) : (
            blogs.map((b) => (
              <div key={b.id} className="col-lg-6 mb-4">
                <SubBlogs data={b} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
