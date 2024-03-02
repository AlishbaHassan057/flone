import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const registerUserData = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await authService.signUP(data);
    } catch (error) {
      const message = error.response.data.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authService.signIn(data);
  } catch (error) {
    const message = error.response.data.error;
    return thunkAPI.rejectWithValue(message);
  }
});

// signout

export const logOut = createAsyncThunk("auth/logout", (_, thunkAPI) => {
  try {
    authService.signOut();
  } catch (error) {}
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(registerUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "An Error Ocuured";
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
