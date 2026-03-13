import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const HomePageTrending = () => {
    const defaultApi = "https://api.themoviedb.org/3/movie/popular?api_key=941d5693ffe3ad457206af43b7ca3d00";
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(defaultApi);
            const res = response.data;
            // console.log(res.results);
            setPopular(res.results);
        }
        fetch();
    }, [])
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="  pt-10 ">
                <p className=" md:ml-8 font-bold text-2xl">Trending Now</p>
                {/* card */}


                <div className="mt-2 mb-10 md:mb-20 flex overflow-x-auto gap-2 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {popular.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-60  md:h-auto block w-40 md:w-60  rounded-base shrink-0 shadow-xs">
                            <div className="overflow-hidden rounded-md ">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-60   object-cover cursor-pointer "
                                    onClick={()=>{navigate(`/selectedMovie/${movie.id}`)}}
                                />
                                
                            
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}
export default HomePageTrending;