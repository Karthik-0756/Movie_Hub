import React from "react";
import NavBar from "../NavBar";
import PopularTVShows from "./Apis/PopularTVShows";
import TopRatedShows from "./Apis/TopRatedShows";
import OngoingShows from "./Apis/OngoingShows";
import AiringToday from "./Apis/AiringToday";
import HomepageFooter from "../../components/HomepageFooter";

const Tv_HomeScreen = () =>{
    return(
        <div className="w-full min-h-screen text-white   bg-black overflow-x-hidden">
            <NavBar/>
            <div className="md:mx-20 px-4 md:px-0 -mt-15 relative z-10 space-y-10 ">
                <h1 className="text-2xl text-white mb-5 font-bold">Popular TV Shows</h1>
                <PopularTVShows/>
                <h1 className="text-2xl text-white mb-5 font-bold">TopRated Shows</h1>
                <TopRatedShows/>
                <h1 className="text-2xl text-white mb-5 font-bold">ongoing Shows</h1>
                <OngoingShows/>
                <h1 className="text-2xl text-white mb-5 font-bold">Airing Today</h1>
                <AiringToday/>
                <HomepageFooter/>

            </div>
            
            

        </div>
    )
}
export default Tv_HomeScreen;