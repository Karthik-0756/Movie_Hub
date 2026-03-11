import React from "react";
import ActionMovies from "./ActionMovies";
import AdventureMovie from "./AdventureMovie";
import ComedyMovies from "./ComedyMovies";
import HomePageTrending from "../components/HomePageTrending";
import HomepageFooter from "../components/HomepageFooter";
import bgImage from '../assets/hero_banner.jpg';
import heroInfo from '../assets/hero_title.png'

const LandingPage = () => {
    return (
        /* min-h-screen ensures the black background covers the entire page length */
        <div className="w-full min-h-screen text-white   bg-black overflow-x-hidden">

            {/* Hero Section: Background image only covers the top portion */}
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${bgImage})`
                }}
                className="bg-cover bg-center w-full h-[80vh] relative"
            >
                <nav className="md:mx-20">
                    <div className="flex justify-between pt-4">
                        <div className="flex items-center">
                            <h1 className="text-2xl text-red-600 font-bold">Movie_Hub</h1>

                            <div className="hidden lg:flex ml-10">
                                <p className="mr-7 text-sm text-white font-bold cursor-pointer">Home</p>
                                <p className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">TV Shows</p>
                                <p className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">Movies</p>
                                <p className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">New & Popular</p>
                                <p className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">My List</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                placeholder="Search"
                                className="w-40 h-8 border border-gray-500 bg-black/50 rounded mr-4 pl-2 text-white text-sm focus:outline-none focus:border-white"
                                type="text"
                            />
                            <img
                                className="w-8 h-8 rounded"
                                src="https://encrypted-tbn0.gstatic.com"
                                alt="Profile"
                            />
                        </div>
                    </div>
                </nav>
                <div className="ml-30">
                    <img src={heroInfo} alt="" className="mt-60 w-100 h-50" />
                    <div className="mt-10">
                        <button className="w-22 h-10 rounded-2xl bg-red-500 text-white">Play</button>
                        <button className="w-30 ml-5 h-10 rounded-2xl bg-white text-black">Watch trailer</button>
                    </div>

                </div>



                {/* Optional: Add Hero Content here (Title/Play Button) */}
            </div>

            {/* Movies Content: Moved outside the hero div to sit on the black background */}
            <div className="md:mx-20 px-4 md:px-0 -mt-15 relative z-10 space-y-10 pb-20">
                <HomePageTrending />
                <ActionMovies />
                <AdventureMovie />
                <ComedyMovies />
                <HomepageFooter />
            </div>
        </div>
    );
};

export default LandingPage;