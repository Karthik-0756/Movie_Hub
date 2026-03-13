import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginBG.jpg";  
import axios from "axios";
const loginPage = () => {
    const navigate = useNavigate();

    const [user , SetUser] = useState(
        {
            name:'',
            password:'',
        }
    )

    const handleUser=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        SetUser({...user,   [name]:value})
        // console.log(value)
    }
    const handleShow=async(e)=>{
         e.preventDefault(); 
        const response =await axios.post("https://movie-hub-backend-zo2m.onrender.com/login/newUser",user)
        alert(response.data)
       if (response.data === "success"){
         navigate('/landingPage');
       }

    }

    return (
        
            <div className="container w-full h-screen object-cover overflow-hidden   " >
                <div className="bg-cover inset-0 absolute bg-center brightness-25 -z-10 " style={{ backgroundImage: `url(${bgImage})` }} />
                {/* <img src={bgImage} alt="background" className="w-full h-full object-cover opacity-70"/> */}
                <div className="container  " style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* <h1 className="text-red-700 ml-50 mt-10 font-bold text-6xl">Netflic</h1>
                    <div className="mr-50 mt-10 ">
                        <select className="w-30 h-9 border-2  border-white font-bold text-white text-center rounded-sm bg-gray-800">
                            <option value="">English</option>
                            <option value="">Tamil</option>
                            <option value="">Hindi</option>
                        </select>
                        <button onClick={() => navigate('/login')} className=" cursor-pointer h-9 w-20  ml-3 bg-red-600 text-white border-white rounded-sm">Login </button>
                    </div> */}
                  


                </div>
                  <div className="md:ml-140 ml-10 mt-40 border-2  w-80  md:w-100 md:h-100 text-white    ">
                        <h1 className="text-3xl text-center mt-5 text-red-500 font-bold ">Login</h1>
                        <form onSubmit={handleShow} className="ml-10 mt-15">
                            
                            <input type="text" required name="name" onChange={handleUser} placeholder="Enter your Phone Number" className="border-2 mb-8 rounded w-60 md:w-80 p-3" />
                            <input type="password" required name="password" onChange={handleUser} placeholder="Enter your Password" className="border-2 rounded w-60 md:w-80 p-3" />
                            <button   className="w-20 h-10 bg-red-400 rounded text-m hover:bg-red-500 cursor-pointer text-white mt-5  ">Login</button>

                        </form>
                        <div className="flex ml-10 md:ml-25 mt-8 mb-5">
                            <p className="text-m ">Dont you have account?</p>
                            <span onClick={() => navigate("/signIn")} className="text-blue-400 text-m cursor-pointer underline">  Sign in</span>
                        </div>


                    </div>
            </div>

     
    )
}
export default loginPage;