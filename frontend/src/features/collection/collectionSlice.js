import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collectionService } from "./collectionService";

// Define initial state
const initialState = {
  loading: false,
  error: false,
  success: false,
  message: "",
  collections: [],
  images: [],
};

// Async thunk for adding a new collection
export const addNewCollection = createAsyncThunk(
  "collection/addNewCollection",
  async (data, thunkAPI) => {
    try {
      return await collectionService.addCollection(data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue(
          "An error occurred during the collection addition process"
        );
      }
    }
  }
);

// Async thunk for getting collection data
export const getCollectionData = createAsyncThunk(
  "collection/getCollectionData",
  async (_, thunkAPI) => {
    try {
      return await collectionService.getCollection();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// Async thunk for posting an image to the collection
export const postCollectionImage = createAsyncThunk(
  "collection/postCollectionImage",
  async (imgData, thunkAPI) => {
    try {
      return await collectionService.postImage(imgData);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue(
          "An error occurred during the image posting process"
        );
      }
    }
  }
);

// Create collection slice
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.collections.push(action.payload);
      })
      .addCase(addNewCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getCollectionData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCollectionData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.collections = action.payload;
      })
      .addCase(getCollectionData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(postCollectionImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCollectionImage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.images.push(action.payload);
      })
      .addCase(postCollectionImage.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { reducer: collectionReducer } = collectionSlice;

export default collectionSlice.reducer;
