import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";
import "./log.css";

const LogForm = ({ setOpen }) => {
  const { isError, message, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    p_mail: "",
    password: "",
  });

  const { p_mail, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!p_mail || !password) {
      toast.error("Please enter all fields!");
    } else {
      if (isError) {
        toast.error(message);
      }
      const userData = {
        p_mail,
        password,
      };
      dispatch(login(userData));
    }
  };

  useEffect(() => {
    // If isSuccess is true, navigate to "/admin"
    if (isSuccess) {
      navigate("/add-register");
    }
  }, [isSuccess]);

  return (
    <>
      <form
        className="t-container text-white d-block w-75 mx-auto rounded shadow me-5 px-4 py-4 position-relative "
        style={{
          backgroundImage: `url('https://st2.depositphotos.com/2361751/6622/i/450/depositphotos_66220999-Glitter-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          className="ok ms-5"
          width={"100px"}
          src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
        />

        <h3 className="text-black mx-auto text-center fw-bold">SIGN UP</h3>
        <label className="me-5 text-black fw-bold">Username</label>
        <input
          className="form-control mt-1"
          type="email"
          name="p_mail"
          placeholder="Enter Your Email Address"
          value={p_mail}
          onChange={handleChange}
          required
        />

        <div>
          <label className="my-2 text-black fw-bold">Password </label>
          <input
            className="form-control mt-1"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn mt-4 d-block mx-auto fw-bold"
          style={{ width: "100%" }}
        >
          LOGIN
        </button>

        <p className="forget mt-2 mb-0 text-secondary me-0 text-end fs-6 text-secondary">
          Forget Password?
        </p>
        <p className="mt-2 fw-normal text-black text-center">
          Are you a new User?{" "}
          <span>
            <a
              className="text-black"
              onClick={() => setOpen(true)}
              href="#"
              style={{ textDecoration: "none", fontSize: "1.3rem" }}
            >
              Sign Up
            </a>
          </span>
        </p>
      </form>
    </>
  );
};

export default LogForm;
