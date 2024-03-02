import React from "react";
import "./contact.css";
import Navbar from "../page/navbar/Navbar";
import Footer from "../page/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid  bg-gray">
        <h1 className="text-center mt-3 ">Get In Touch</h1>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-6">
            <div className="shadow p-4 bg-white">
              <form className="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
