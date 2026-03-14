import React from "react";
import NavBar from "../NavBar";
import PopularMovies from "./Apis/PopularMovies";
import TopRatedMoives from "./Apis/TopRatedMovies";
import UpComingMovies from "./Apis/Upcomingmovies";
import NowPlayingMovies from "./Apis/NowPlayingMovies";
import HomepageFooter from "../../components/HomepageFooter";
const MovieHomePage = () =>{
    return (
         <div className="w-full min-h-screen text-white   bg-black overflow-x-hidden">
            <NavBar/>
            <div className="md:mx-20 px-4 md:px-0 -mt-15 relative z-10 space-y-10 ">
                <h1 className="text-2xl text-white mb-5 font-bold">Popular Movies</h1>
                <PopularMovies/>
                <h1 className="text-2xl text-white mb-5 font-bold">TopRated Movies</h1>
                <TopRatedMoives/>
                <h1 className="text-2xl text-white mb-5 font-bold">Upcoming Movies</h1>
                <UpComingMovies/>
                <h1 className="text-2xl text-white mb-5 font-bold">NowPlaying Movies</h1>
                <NowPlayingMovies/>
                <HomepageFooter/>

            </div>
         </div>
    )
}
export default MovieHomePage;