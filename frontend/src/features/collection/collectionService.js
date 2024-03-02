import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:5175/api";

export const addCollection = async (formData) => {
  try {
    const response = await axios.post(
      `${base_url}/collection/add-collection`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
// GET - COLLECTION
export const getCollection = async () => {
  const response = await axios.get(`${base_url}/collection/get-collection`);
  return response.data;
};
// GET IMAGES
// Image
export const collectionImage = createAsyncThunk(
  "collection/image-collect",
  async (imgData, thunkAPI) => {
    try {
      return await collectionService.postImage(imgData);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue(
          "An error occurred during the blog addition process"
        );
      }
    }
  }
);
export const collectionService = {
  addCollection,
  getCollection,
  collectionImage,
};
