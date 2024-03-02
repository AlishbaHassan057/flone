import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./collect.css";
import { Link } from "react-router-dom";
import { addNewCollection } from "../features/collection/collectionSlice";

const AddCollection = () => {
  const dispatch = useDispatch();

  // State variables for form data and uploaded image
  const [formData, setFormData] = useState({
    title: "",
    dated: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Set image preview
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Cloudinary
    const uploadedImageUrl = await uploadImage();

    // Create new blog object with image URL
    const newCollection = {
      product: formData.product,
      image: uploadedImageUrl,
      price: formData.price,
      description: formData.description,
      category: formData.category,
    };

    // Dispatch action to add new blog
    dispatch(addNewCollection(newCollection));

    // Reset form and image states
    setFormData({
      product: "",
      category: "",
      description: "",
      price: "",
    });
    setImage(null);
    setImagePreview(null);
  };

  // Function to upload image to Cloudinary
  const uploadImage = async () => {
    if (!image) return null;

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "acxccm7q");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dycl3upvy/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const imageData = await response.json();
      return imageData.secure_url;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  return (
    <div>
      <Link to="/collect" className="btn mt-3 ms-2 ">
        Go To Collection
      </Link>
      <form
        className="col-lg-5  px-5 py-3 mx-auto mt-2 shadow rounded-3"
        onSubmit={handleSubmit}
      >
        <h2 className="fw-bold text-center">Add New Collection</h2>
        <div>
          <label className="fw-bold mt-2 fs-5">Product</label>
          <input
            className="form-control"
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="fw-bold mt-2 fs-5">Price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="fw-bold mt-2 fs-5">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="fw-bold mt-2 fs-5">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            cols={59}
            required
          />
        </div>
        <div>
          <label className="fw-bold mt-2 fs-5">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Uploaded"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        <button type="submit" className="btn mt-2 showss">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCollection;
