import axios from "axios";
import React, { useEffect, useState } from "react";

const TopRatedMoives = () => {
    const api = "https://api.themoviedb.org/3/movie/top_rated?api_key=941d5693ffe3ad457206af43b7ca3d00"
    const [movie, setMovie] = useState([])

    useEffect( (e) => {
        
        const fetchMovie =async () => {
            const response = await axios.get(api);
            const res = response.data;
            setMovie(res.results)
            // console.log(res.results);

        }
        fetchMovie();

    }, [])
    return(
        <div>
            <div className="mt-2 mb-20 flex overflow-x-auto gap-2 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {movie.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-auto block w-40 md:w-60  rounded-base shrink-0 shadow-xs hover:scale-103 transition duration-200">
                            <div className="overflow-hidden rounded-md cursor-pointer">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-60  object-cover  "
                                    onClick={()=>selectedMovie(movie.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>


        </div>
    )
}

export default TopRatedMoives;