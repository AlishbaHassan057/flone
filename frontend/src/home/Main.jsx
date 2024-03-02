import React, { useEffect, useState } from "react";
import "./home.css";
import LogForm from "./LogForm";
import RegForm from "./RegForm";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Main = () => {
  const { isLoading, isError, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  return (
    <>
      {open && <RegForm setOpen={setOpen} />}
      <div
        className="logininbox main container-fluid d-flex align-items-center justify-content-center"
        style={{ height: "100vh", backgroundColor: "lightblue" }}
      >
        <div className="row mx-auto">
          <div className="col-lg-8 mx-auto log">
            <LogForm
              setOpen={setOpen}
              handleSubmit={handleSubmit}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
