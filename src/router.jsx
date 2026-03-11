import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import LoginPage from "./components/loginPage"
import SignIn from "./components/homepage/SignIn";
import LandingPage from "./landingPage/LandingPage";
import SelectedMovie from "./MovieSelection/SelectedMovie"





const Router=()=>{
    
    return(
        <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/landingPage" element={<LandingPage/>}/>
            <Route path="/selectedMovie/:id" element={<SelectedMovie/>}/>

       
          
         </Routes>
        </BrowserRouter>
    )
}
export default Router;