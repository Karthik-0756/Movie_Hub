import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Comedy = 35
const api = "941d5693ffe3ad457206af43b7ca3d00";
const defaultApi = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${Comedy}`
const ComedyMovies = () => {

  const[comedyMovies, setComedyMovies]=useState([]);
    useEffect(() => {

        const fetch = async () => {
            const response = await axios.get(defaultApi)
            const res = response.data
            setComedyMovies(res.results)
            // console.log(res.results)
        }
        fetch()
    }, [])

    const navigate = useNavigate();
    return (
        <div className="">



            <h1 className="font-bold text-2xl text-white">Comedy Movies</h1>
            {/* card */}


             <div className="mt-2 mb-20 flex overflow-x-auto gap-2 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {comedyMovies.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-auto block w-40 md:w-60  rounded-base shrink-0 shadow-xs">
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

export default ComedyMovies;