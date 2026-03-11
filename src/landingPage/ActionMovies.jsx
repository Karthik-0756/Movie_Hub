    import axios from "axios";
    import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieSelected from '../MovieSelection/SelectedMovie'

    const ActionMovies = () => {

        const [actionMovie, setActionMovie] = useState([]);

            const GENRE_ID = 28; 
            const api="941d5693ffe3ad457206af43b7ca3d00"
            const defaultApi = `https://api.themoviedb.org/3/discover/movie?api_key=941d5693ffe3ad457206af43b7ca3d00&with_genres=${GENRE_ID}`;

        useEffect(() => {
            const fetchMovie = async () => {
                const response =await axios.get(defaultApi);
                const res = response.data;
                // console.log(res.results);
                setActionMovie(res.results)
                
            }
            fetchMovie();
          
            

        }, [])
        // useEffect(()=>{
        //     console.log(actionMovie)
        // },[actionMovie])
        const navigate = useNavigate()

        const selectedMovie=(id)=>{
            
            
            navigate(`/selectedMovie/${id}`)


        }


        return (
            <div>



               <h1 className="font-bold text-2xl text-white ">Action Movies</h1>
               {/* card */}


                 <div className="mt-2 mb-20 flex overflow-x-auto gap-2 flex-nowrap scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {actionMovie.map(movie => (
                        <div key={movie.id} className="bg-neutral-primary-soft h-auto block w-60  rounded-base shrink-0 shadow-xs">
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
    export default ActionMovies