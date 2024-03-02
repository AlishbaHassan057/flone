import axios from "axios";
const base_url = "http://localhost:5175/api/user";

// register
const signUP = async (userData) => {
  const response = await axios.post(`${base_url}/register-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// LOGIN PART
//
const signIn = async (userData) => {
  const response = await axios.post(`${base_url}/login-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout the user
const signOut = () => {
  localStorage.removeItem("user");
};

export const authService = {
  signUP,
  signIn,
  signOut,
};
