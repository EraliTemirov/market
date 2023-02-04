import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) navigate("/");
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      let res = await axios.post("https://reqres.in/api/login", values);

      if (res.status === 200) {
        toast("Login success", { type: "success" });
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (error) {
      toast(error.response.data.error, {
        type: "error",
      });
    } finally {
      setValues({ email: "", password: "" });
    }
  }

  function handleInputChange(e) {
    setValues((ov) => ({ ...ov, [e.target.name]: e.target.value }));
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-bg-light">
      <form onSubmit={handleLogin} className="shadow bg-white w-50 p-3">
        <h1 className="display-3 text-center">Login</h1>
        <div className="my-3">
          <label className="form-label" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            required
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label className="form-label" htmlFor="password">
            Your Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            required
            min={4}
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-3">
          <button
            disabled={!values.email || values.password.length < 4}
            className="btn btn-primary d-block w-100 fs-3"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
