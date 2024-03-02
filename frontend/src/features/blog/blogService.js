import axios from "axios";

export const addBlog = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5175/api/blogs/add-blog",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const getBlogs = async () => {
  const response = await axios.get("http://localhost:5175/api/blogs/get-blog");
  return response.data;
};
export const postImage = async (imageData) => {
  try {
    const response = await axios.post(
      "http://localhost:5175/api/blogs/add-blog",
      imageData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const blogService = {
  addBlog,
  getBlogs,
  postImage,
};
