import React from "react";
import bgImage from "../assets/loginBG.jpg";   
import HomePageTrending from "./HomePageTrending";

const HomePage = () => {
  return (
    <div>
      <div className="container w-full h-screen object-cover overflow-hidden   " >
        <div className="bg-cover inset-0 absolute bg-center brightness-25 -z-10 "style={{backgroundImage:`url(${bgImage })` }}/>
        {/* <img src={bgImage} alt="background" className="w-full h-full object-cover opacity-70"/> */}
        <div className="container  " style={{display:"flex", justifyContent:"space-between"}}>
            <h1 className="text-red-700 ml-50 mt-10 font-bold text-6xl">Netflic</h1>
            <div className="mr-50 mt-10 ">
                <select className="w-30 h-9 border-2  border-white font-bold text-white text-center rounded-sm bg-gray-800">
                    <option value="">English</option>
                    <option value="">Tamil</option>
                    <option value="">Hindi</option>
                </select>
                <button className=" h-9 w-20  ml-3 bg-red-600 text-white border-white rounded-sm">buton </button>
            </div>
        

        </div>
        {/* main content */}
        <div className="container mx-auto d-flex">
            <p className="text-white font-bold text-6xl mt-40 text-center">Unlimited movies,</p>
            <p className="text-white font-bold text-6xl mt-3 text-center">Shows, and more...</p>
            <p className="text-white font-medium text-2xl mt-3 text-center">Starts at free! Enjoy your time</p>
            <p className="text-white font-normal text-2xl mt-10 text-center">Ready to Watch? Enter your email to create or reset your free membership.</p>
            <div className="flex items-center justify-center mt-5">
                <input type="text" placeholder="Enter your mail" style={{color:"white" , }} className="bg-transparent border-2 pl-6 p-6 rounded-xl border-gray-600 h-10 w-100"/>
                <button className="text-white font-bold text-xl bg-red-600 w-40 h-13 rounded-sm ml-8">Get Started  </button>
            </div>
            

        </div>

       
      </div>
       <HomePageTrending/>
      <div >
        
      </div>
    </div>
  );
};

export default HomePage;