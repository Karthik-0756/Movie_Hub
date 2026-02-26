import axios from "axios";
import React, { useState, useEffect } from "react";
import HomepageFooter from "./HomepageFooter";


const HomePageTrending = () => {
    const defaultApi = "https://api.themoviedb.org/3/movie/popular?api_key=941d5693ffe3ad457206af43b7ca3d00";
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(defaultApi);
            const res = response.data;
            console.log(res.results);
            setPopular(res.results);
        }
        fetch();
    }, [])
    return (
        <div className="">
            <div className="  mt-10 ml-30 mr-30">
                <p className=" ml-8 font-bold text-2xl">Trending Now</p>
                {/* card */}


                <div className="flex overflow-x-auto gap-6 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"  >

                    {popular.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-100 block w-60 max-w-sm p-6  rounded-base shrink-0 shadow-xs">
                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded-xl  h-70 hover:h-74 object-cover "


                                />

                            </div>

                            {/* <h5 className="mb-3 text-center text-2xl font-semibold tracking-tight text-heading leading-8">{movie.title}</h5> */}

                        </div>



                    ))}




                </div>

                <h1 className="font-bold mb-4 text-2xl">More Reason to Join</h1>
                <div className="flex items-center mb-10 ">
                    <div className="bg-amber-300 mr-6 w-80 p-4 h-70 rounded-xl">
                        <h1 className="text-start  font-bold text-2xl">Enjoy on your TV</h1>
                        <p className="mt-3 text-m">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

                    </div>
                    <div className="bg-amber-300 mr-6 p-4 w-80 h-70 rounded-xl">
                        <h1 className="text-start  font-bold text-2xl">Dounload your shows to watch offline</h1>
                        <p className="mt-3 text-m">Save your favorites easily and always have something to watch.</p>

                    </div>
                    <div className="bg-amber-300 mr-6 p-4 w-80 h-70 rounded-xl">
                        <h1 className="text-start  font-bold text-2xl">Watch anywhere</h1>
                        <p className="mt-3 text-m">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

                    </div>
                    <div className="bg-amber-300 w-80 p-4 h-70 rounded-xl">
                        <h1 className="text-start  font-bold text-2xl">Create profiles for kits</h1>
                        <p className="mt-3 text-m">Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>

                    </div>

                </div>
                <p className="text-center mt-20">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="flex items-center mb-10 justify-center mt-5">
                    
                    <input type="text" placeholder="Enter your mail" style={{ color:"black", }} className="bg-transparent border-2 pl-6 p-6 rounded-xl  border-gray-600 h-10 w-150" />
                    <button className="text-white font-bold text-xl bg-red-600 w-50 h-13 rounded-sm ml-8">Get Started  </button>
                </div>


            </div>
            <HomepageFooter />
        </div>
    )
}
export default HomePageTrending;