import React from "react";
import NavBar from '../NavBar'
import TrendingToday from "./Apis/TrendingToday";
import TrendingWeek from "./Apis/TrendingWeek";
import NowPlaying from "./Apis/NowPlaying";
import OngoingShows from "../TV_shows/Apis/OngoingShows";
import HomepageFooter from "../../components/HomepageFooter";

const HomeScreen = ()=>{
    return (
        <div className="w-full min-h-screen text-white   bg-black overflow-x-hidden">
            <NavBar/>
            <div className="md:mx-20 px-4 md:px-0 -mt-15 relative z-10 space-y-10 ">
                 <h1 className="text-2xl text-white mb-5 font-bold">Trending Today</h1>
                <TrendingToday/>
                 <h1 className="text-2xl text-white mb-5 font-bold">Trending Week</h1>
                <TrendingWeek/>
                 <h1 className="text-2xl text-white mb-5 font-bold">Now Playing</h1>
                <NowPlaying/>
                 <h1 className="text-2xl text-white mb-5 font-bold">Ongoing Shows</h1>
                <OngoingShows/>
                <HomepageFooter/>
                
            </div>

        </div>
    )
}
export default HomeScreen;