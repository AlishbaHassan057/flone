import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  // Function to handle logout
  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="fw-bold">Admin Panel</h1>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-blog" className="link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/edit-blogs" className="link">
              Edit Blogs
            </Link>
          </li>
          <li>
            <Link to="/collect" className="link">
              View Status
            </Link>
          </li>
          <li>
            <Link to="/settings" className="link">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="fw-bold">Welcome to Admin Dashboard</h2>

        {/* Cards */}
        <div className="card-container text-black">
          <div className="row">
            <div className="col-md-6 mb-4 text-black">
              <div className="card blue text-black">
                <h3>Collections</h3>
                <p>Total Collections: 50</p>
                <p>Active Collections: 30</p>
                <p>Inactive Collections: 20</p>
              </div>
            </div>
            <div className="col-md-6 mb-4 text-black">
              <div className="card green text-black">
                <h3>Users</h3>
                <p>Total Users: 100</p>
                <p>Active Users: 80</p>
                <p>Inactive Users: 20</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 text-black">
              <div className="card yellow text-black">
                <h3>Alerts</h3>
                <p>Total Alerts: 10</p>
                <p>Unresolved Alerts: 5</p>
                <p>Resolved Alerts: 5</p>
              </div>
            </div>
            <div className="col-md-6 mb-4 text-black">
              <div className="card red text-black">
                <h3>Blogs</h3>
                <p>Total Blogs: 20</p>
                <p>Draft Blogs: 5</p>
                <p>Published Blogs: 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-box">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Admin;
