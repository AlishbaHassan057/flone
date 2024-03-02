import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { collectionReducer } from "../features/collection/collectionSlice";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collection: collectionReducer,
    blog: blogReducer,
  },
});
