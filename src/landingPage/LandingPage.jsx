import React from "react";
import ActionMovies from "./ActionMovies";
import AdventureMovie from "./AdventureMovie";
import ComedyMovies from "./ComedyMovies";
import HomePageTrending from "../components/HomePageTrending";
import HomepageFooter from "../components/HomepageFooter";
import bgImage from '../assets/hero_banner.jpg';
import heroInfo from '../assets/hero_title.png'
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import TrendingMovies from "./TrendingMovies";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        /* min-h-screen ensures the black background covers the entire page length */
        <div className="w-full min-h-screen text-white   bg-black overflow-x-hidden">

            {/* Hero Section: Background image only covers the top portion */}
            <NavBar/>

            {/* Movies Content: Moved outside the hero div to sit on the black background */}
            <div className="md:mx-20 px-4 md:px-0 -mt-15 relative z-10 space-y-10 ">
                <TrendingMovies/>
                <ActionMovies />
                <AdventureMovie />
                <ComedyMovies />
                <HomepageFooter />
            </div>
        </div>
    );
};

export default LandingPage;