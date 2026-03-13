import HomepageFooter from "./HomepageFooter";
import Faq from "./homepage/Faq";


const HomePageMoreReason = () => {
    return (
        <div>
            {/* more reason to join */}
            <div className=" mx-3  md:mx-30 text-center md:text-start">
                <h1 className="font-bold text-start mb-4 text-2xl">More Reason to Join</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-white">

                    {/* Card 1 */}
                    <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="text-3xl mb-3">🎬</div>
                        <h1 className="font-bold text-lg md:text-2xl">Discover Movies</h1>
                        <p className="hidden md:block mt-2 text-gray-300">
                            Explore trending, popular, and top-rated movies from around the world.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="text-3xl mb-3">⭐</div>
                        <h1 className="font-bold text-lg md:text-2xl">Ratings & Details</h1>
                        <p className="hidden md:block mt-2 text-gray-300">
                            View ratings, genres, language, and movie overview before watching.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="text-3xl mb-3">▶</div>
                        <h1 className="font-bold text-lg md:text-2xl">Watch Trailers</h1>
                        <p className="hidden md:block mt-2 text-gray-300">
                            Instantly watch official trailers and preview upcoming movies.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="text-3xl mb-3">🍿</div>
                        <h1 className="font-bold text-lg md:text-2xl">Find Your Next Movie</h1>
                        <p className="hidden md:block mt-2 text-gray-300">
                            Browse movies by genre and discover something new to watch anytime.
                        </p>
                    </div>

                </div>
            </div>
            <div className="md:text-center ">
                <Faq />

            </div>
            <p className="text-center mt-20">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex items-center mb-10 justify-center mt-5">

                <input type="text" placeholder="Enter your mail" style={{ color: "white", }} className=" bg-transparent border-2 pl-6 p-6 rounded-xl  border-gray-600 h-10 w-50 md:w-150" />
                <button onClick={() => { alert("Login first to continue") }} className="text-white md:font-bold text-xl bg-red-600 w-30 md:w-50 h-13 rounded-sm ml-8">Get Started  </button>
            </div>
            <div className="ml-4 md:ml-30">
                <HomepageFooter />
            </div>



        </div>
    )
}

export default HomePageMoreReason;