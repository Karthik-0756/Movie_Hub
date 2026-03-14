import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import LoginPage from "./components/loginPage"
import SignIn from "./components/homepage/SignIn";
import LandingPage from "./landingPage/LandingPage";
import SelectedMovie from "./MovieSelection/SelectedMovie"
import Tv_HomeScreen from "./landingPage/TV_shows/Tv_HomeScreen";
import MovieHomePage from "./landingPage/Movies/MoviesHomePage";
import NewAndPopularHomeScreen from './landingPage/NewAndPopular/HomeScreen'
import MyListHomePage from "./landingPage/Mylist/MyListHomepage";





const Router=()=>{
    
    return(
        <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/landingPage" element={<LandingPage/>}/>
            <Route path="/selectedMovie/:id" element={<SelectedMovie/>}/>
            <Route path="/tvshows" element={<Tv_HomeScreen/>}/>
            <Route path="/movies" element={<MovieHomePage/>}/>
            <Route path="/newandpopular" element={<NewAndPopularHomeScreen/>}/>
            <Route path="/mylist" element={<MyListHomePage/>}/>



       
          
         </Routes>
        </BrowserRouter>
    )
}
export default Router;