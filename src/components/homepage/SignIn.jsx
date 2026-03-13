import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../homepage/loginBG.jpg";

const SignIn = () => {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const api = "https://movie-hub-backend-zo2m.onrender.com/login";

  const showdetails = async (e) => {
    e.preventDefault();

    try {

      const req = await axios.post(api, formData);
      console.log(req.data);

      setFormData({
        name: "",
        number: "",
        email: "",
        password: ""
      });

      navigate("/landingPage");

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container w-full h-screen object-cover overflow-hidden text-white">
      
      <div
        className="bg-cover inset-0 absolute bg-center brightness-25 -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="md:ml-140 ml-10 mt-40  border-2 w-80 md:w-100 md:h-110">
        <h1 className="text-3xl text-center mt-5 text-red-500 font-bold">
          Sign In
        </h1>

        <form onSubmit={showdetails} className="ml-10 mt-15 ">

          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your Name"
            className="border-2 mb-2 rounded w-60 md:w-80 p-3"
          />

          <input
            required
            name="number"
            value={formData.number}
            onChange={handleChange}
            type="tel"
            placeholder="Enter your Number"
            className="border-2 mb-2 rounded w-60 md:w-80 p-3"
          />

          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your Email"
            className="border-2 mb-2 rounded w-60 md:w-80 p-3"
          />

          <input
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your Password"
            className="border-2 rounded w-60 md:w-80 p-3"
          />

          <button
            type="submit"
            className="w-20 h-10 bg-red-400 rounded hover:bg-red-500 cursor-pointer text-white mt-5 mb-5"
          >
            Login
          </button>

        </form>
      </div>

    </div>
  );
};

export default SignIn;