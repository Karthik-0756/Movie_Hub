import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Adventure = 12
const api = "941d5693ffe3ad457206af43b7ca3d00";
const defaultApi = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${Adventure}`



const AdventureMovie = () => {
    useEffect(() => {

        const fetch = async () => {
            const response = await axios.get(defaultApi)
            const res = response.data
            setAdventureMovie(res.results)
        }
        fetch()
    }, [])
    const [adventureMovie,setAdventureMovie]=useState([]);
    const navigate = useNavigate();
    return (
        <div className="">



            <h1 className="font-bold text-2xl text-white">Adventure Movies</h1>
            {/* card */}


             <div className="mt-2 mb-20 flex overflow-x-auto gap-2 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {adventureMovie.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-auto block w-60  rounded-base shrink-0 shadow-xs">
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-60 cursor-pointer   object-cover"
                                    onClick={()=>{navigate(`/selectedMovie/${movie.id}`)}}
                                />
                            </div>
                        </div>
                    ))}
                </div>


        </div>
    )
}
export default AdventureMovie;