import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Input, PasswordInput } from "../components/core";
import { Button } from "primereact/button";
import { MainOutlet } from "../components/outlets";
import { NavLink, useNavigate } from "react-router-dom";
import { API, user } from "../utils";
import logo from "../assets/images/yumverse-logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import BASE_URI from "../app.config";

const initialCredentials = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      return toast.error("Password and confirm password doesn't match");
    }
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URI}/register/`, credentials);
      const data = API.success(response, "Signup Successfull");
      user.set(data);
      setCredentials(initialCredentials);
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      API.error(error, "An error occurred while registration");
    }
    setLoading(false);
  };

  return (
    <MainOutlet>
      <main className="flex justify-center items-center my-10 mb-11 w-full">
        <section className="w-96 flex flex-col items-center">
          <img src={logo} className="w-48 mb-3" alt="logo" />
          <h2>Create Account</h2>
          <form className="w-full" onSubmit={handleSignup}>
            <Input
              name="name"
              label="Name"
              placeholder="John Doe"
              value={credentials.name}
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
            />
            <Input
              label="Username"
              placeholder="johndoe"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <Input
              type="email"
              name="email"
              label="Email Address"
              placeholder="johndoe@example.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <PasswordInput
              label="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <PasswordInput
              label="Confirm Password"
              value={credentials.confirmPassword}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  confirmPassword: e.target.value,
                })
              }
            />
            <div className="w-full flex flex-col justify-between items-center gap-5">
              <Button
                label="Sign Up"
                loading={loading}
                icon={<AiOutlineLogin className="text-lg" />}
                className="btn w-80 mt-7 !py-[4.5px]"
              />
              <p className="text-lightgrey">
                Already have an account?
                <NavLink to="/login" className="text-blue">
                  &nbsp; Login
                </NavLink>
              </p>
            </div>
          </form>
        </section>
      </main>
    </MainOutlet>
  );
};

export default Signup;
