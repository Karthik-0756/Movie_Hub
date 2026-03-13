import React, { useState } from "react";
import bgImage from "../assets/loginBG.jpg";
import HomePageTrending from "./HomePageTrending";
import { useNavigate } from 'react-router-dom'
import HomePageMoreReason from "./HomePageMoreReason";

const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div>
            <div className="container w-full md:h-screen  object-cover overflow-hidden   " >
                <div className="bg-cover inset-0 absolute bg-center brightness-25 -z-10 " style={{ backgroundImage: `url(${bgImage})` }} />
                {/* <img src={bgImage} alt="background" className="w-full h-full object-cover opacity-70"/> */}
                <div className="container  " style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1 className="text-red-700 ml-5 md:ml-40 mt-5 font-bold text-3xl md:text-4xl font-netflix ">Movie_Hub</h1>
                    <div className=" mr-5 md:mr-40 mt-5 ">
                        <select className="w-20 md:w-30 h-6 md:h-8 border-2  border-white md:font-bold text-white text-center rounded-sm bg-gray-800  ">
                            <option value="">English</option>
                            <option value="">Tamil</option>
                            <option value="">Hindi</option>
                        </select>
                        <button onClick={() => navigate('/login')} className=" cursor-pointer h-6 md:h-8 w-10 w-15 md:w-20 ml-2 md:ml-3 bg-red-600 text-gray-300 border-white rounded-sm">Login </button>
                    </div>


                </div>
                {/* main content */}
                <div className="container mx-auto d-flex">
                    <p className="text-white font-bold text-3xl md:text-6xl mt-30 md:mt-40 text-center">Unlimited movies,TV</p>
                    <p className="text-white font-bold text-3xl md:text-6xl md:mt-3 text-center">Shows, and more...</p>
                    <p className="text-white font-medium md:text-2xl mt-3 text-center">Starts at free! Enjoy your time</p>
                    <p className="text-white font-normal md:text-2xl mt-10 text-center">Ready to Watch? Enter your email to create or reset your free membership.</p>
                    <div className="md:flex items-center justify-center mt-5  ">
                        <input type="text" placeholder="Enter your mail" style={{ color: "white", }} className="bg-transparent border-2 pl-6 p-6 rounded ml-10  border-gray-600 h-10 w-80 md:w-100" />
                        <button onClick={() => { alert("Login first to continue") }} className="text-gray-300 font-bold text-xl bg-red-700 w-40 mt-5 md:mt-0 h-10 md:h-13 rounded-sm ml-30 md:ml-8 mb-30 md:mb-0 ">Get Started  </button>
                    </div>


                </div>


            </div>
            <div className="bg-black text-white">
                 <div className=" mx-4 md:mx-30">
                    <HomePageTrending />
                </div>
                <HomePageMoreReason />

            </div>
               
            <div >

            </div>
        </div>
    );
};

export default HomePage;