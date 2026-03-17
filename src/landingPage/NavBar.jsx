import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/hero_banner.jpg';
import heroInfo from '../assets/hero_title.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBar = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState('')
    const [totalMovie, setTotalMovie] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const selectMovie = async (e) => {
        const value = e.target.value
        setMovie(value);
        // console.log(movie)
        try {
            const response = await axios.get("https://api.themoviedb.org/3/search/movie",
                {
                    params: {
                        api_key: "941d5693ffe3ad457206af43b7ca3d00",
                        query: value,
                    },
                }

            )
            setTotalMovie(response.data.results)



        } catch (e) {
            console.log(e)

        }

    }



    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${bgImage})`
                }}
                className="bg-cover bg-center w-full h-[80vh] relative"
            >
                <nav className="md:mx-20 mx-5">
                    <div className="flex justify-between pt-4">
                        <div className="flex items-center">
                            <button
                                className="lg:hidden mr-5"
                                onClick={() => setIsOpen(true)}
                            >
                                ☰
                            </button>
                            <h1 className="text-2xl text-red-600 font-bold">Movie_Hub</h1>

                            <div className="hidden lg:flex ml-10">
                                <p onClick={() => { navigate('/landingPage') }} className="mr-7 text-sm text-white  hover:text-gray-300  cursor-pointer">Home</p>
                                <p onClick={() => { navigate('/tvshows') }} className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">TV Shows</p>
                                <p onClick={() => { navigate('/movies') }} className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">Movies</p>
                                <p onClick={() => { navigate('/newandpopular') }} className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">New & Popular</p>
                                <p onClick={() => { navigate('/mylist') }} className="mr-7 text-sm text-white hover:text-gray-300 cursor-pointer">My List</p>
                            </div>
                        </div>
                        <div
                            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                                } transition-transform duration-300 z-50`}
                        >
                            <div className="p-5">
                                <button onClick={() => setIsOpen(false)}>❌</button>

                                <ul className="mt-5 space-y-4">
                                    <li onClick={() => navigate('/landingPage')}>Home</li>
                                    <li onClick={() => navigate('/tvshows')}>TV Shows</li>
                                    <li onClick={() => navigate('/movies')}>Movies</li>
                                    <li onClick={() => navigate('/newandpopular')}>New & Popular</li>
                                    <li onClick={() => navigate('/mylist')}>My List</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">

                            <div className="relative">
                                <input
                                    placeholder="Search"
                                    className="w-32 md:w-44 h-8 border border-gray-500 bg-black/50 rounded px-2 text-white text-sm focus:outline-none focus:border-white"
                                    type="text"
                                    onChange={selectMovie}
                                />

                                {/* Dropdown */}
                                {totalMovie.length > 0 && (
                                    <div className="absolute top-10 w-45  md:w-64  bg-black text-white max-h-60 overflow-y-auto rounded shadow-lg z-50  [scrollbar-width:none]">
                                        {totalMovie.map((movie) => (
                                            <div
                                                key={movie.id}
                                                className="p-2  hover:bg-gray-800 cursor-pointer border-b border-gray-700"
                                                onClick={() => { navigate(`/selectedMovie/${movie.id}`) }}
                                            >
                                                {movie.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center cursor-pointer group">
                                <img
                                    className="w-8 h-8 rounded-md"
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                    alt="Profile"
                                />
                                {/* <svg
                                                className="w-4 h-4 ml-1 text-white group-hover:rotate-180 transition"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg> */}
                            </div>


                        </div>

                    </div>
                </nav>
                <div className="md:ml-30 ml-2">
                    <img src={heroInfo} alt="" className="mt-60 w-100 h-50" />
                    <div className="mt-10">
                        <button className="w-22 h-10 rounded-2xl bg-red-500 text-white cursor-no-drop">Play</button>
                        <button className="w-30 ml-5 h-10 rounded-2xl bg-white text-black cursor-not-allowed">Watch trailer</button>
                    </div>

                </div>



                {/* Optional: Add Hero Content here (Title/Play Button) */}
            </div>

        </div>
    )
}
export default NavBar;