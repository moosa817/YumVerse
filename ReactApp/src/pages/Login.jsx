import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "primereact/button";
import { Input, PasswordInput } from "../components/core";
import { MainOutlet } from "../components/outlets";
import logo from "../assets/images/yumverse-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { API, user } from "../utils";
import axios from "axios";
import BASE_URI from "../app.config";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = ({ setIsLogin }) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URI}/token/`, credentials);
      const data = API.success(response, "Login Successfully");
      setCredentials(initialCredentials);
      user.set(data);
      navigate("/dashboard");
    } catch (error) {
      API.error(error, "An error occurred while logging in the user");
    }
    setLoading(false);
  };

  return (
    <MainOutlet>
      <main className="flex justify-center items-center my-10 mb-11 w-full">
        <section className="w-96 flex flex-col items-center">
          <img src={logo} className="w-52 h-44 mb-2" alt="KPSIAJ Logo" />
          <h2>Login</h2>
          <form className="w-full" onSubmit={handleLogin}>
            <Input
              label="Username"
              placeholder="johndoe"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <PasswordInput
              label="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <div className="w-full flex flex-col items-center">
              <Button
                label="Login"
                loading={loading}
                icon={<AiOutlineLogin className="text-lg" />}
                className="btnDark w-80 mt-7 !py-[4.5px]"
              />
              <p className="text-lightgrey mt-3">
                Don't have an account?
                <NavLink to="/signup" className="text-blue">
                  &nbsp; Sign up
                </NavLink>
              </p>
            </div>
          </form>
        </section>
      </main>
    </MainOutlet>
  );
};

export default Login;
