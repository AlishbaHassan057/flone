import { useEffect } from "react";
import "./subcollect.css";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import SubCollection from "./SubCollection";
import { Link } from "react-router-dom";
import Footer from "../page/footer/Footer";

import { getCollectionData } from "../features/collection/collectionSlice";
import Navbar from "../page/navbar/Navbar";

const Collection = () => {
  const dispatch = useDispatch();
  const { collections, loading } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getCollectionData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="heading-container mb-2 mt-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-2 py-4 fs-5">
          <div className="mt-1 fw-bold">
            <Link to="/" className="link-unstyled">
              Home
            </Link>{" "}
            <span> / </span>
            <Link to="#" className="link-unstyled">
              Collection
            </Link>
          </div>
        </div>
      </div>
      {/* heading */}
      <div className="c mt-5">
        <hr className="hr-left" />
        <h3 className="heading fw-bold">Featured Collection</h3>
        <hr className="hr-right" />
      </div>

      <div className="container mt-5">
        {loading ? (
          <div className="text-center d-block mx-auto ">
            <FadeLoader size={50} height={50} />
          </div>
        ) : (
          <div className="container mt-5 mx-auto w-75">
            <div className="row justify-content-center">
              {collections.map((collect) => (
                <div
                  key={collect.id}
                  className="col-lg-4 mb-4 subcollection-card"
                >
                  <SubCollection data={collect} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Collection;
