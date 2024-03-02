import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

const initialState = {
  loading: false,
  error: false,
  success: false,
  message: "",
  blogs: [],
  images: [],
};

export const addNewBlog = createAsyncThunk(
  "blogs/add-Blog",
  async (data, thunkAPI) => {
    try {
      return await blogService.addBlog(data);
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
// get-blogs

export const getBlogData = createAsyncThunk(
  "blogs/get-blog",
  async (_, thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);
// Image
export const blogImage = createAsyncThunk(
  "blogs/image-Blog",
  async (imgData, thunkAPI) => {
    try {
      return await blogService.postImage(imgData);
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

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs.push(action.payload);
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getBlogData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(blogImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(blogImage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.images.push(action.payload);
      })
      .addCase(blogImage.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { blog, reset } = blogSlice.actions;
export default blogSlice.reducer;
