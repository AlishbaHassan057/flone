import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import HomePage from "./page/HomePage";
import AddBlogs from "./addblog/AddBlog";
import Collection from "./collect/Collection";
import AddCollection from "./addcollection/AddCollection";
import Blog from "./blog/Blog";
import Main from "./home/Main";
import Admin from "./dashboard/Admin";
import Contact from "./contact/Contact";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-blog" element={<AddBlogs />} />
          <Route path="/login" element={<Main />} />
          <Route path="/add-collect" element={<AddCollection />} />
          <Route path="/collect" element={<Collection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
