import HomepageFooter from "./HomepageFooter";
import Faq from "./homepage/Faq";


const HomePageMoreReason=()=>{
    return(
        <div>
                     {/* more reason to join */}
                <div className="mx-30 ">
                    <h1 className="font-bold mb-4 text-2xl">More Reason to Join</h1>
                    <div className="flex items-center mb-10 text-white">
                        <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] mr-6 w-80 p-4 h-70 rounded-xl">
                            <h1 className="text-start  font-bold text-2xl">Enjoy on your TV</h1>
                            <p className="mt-3 text-m">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

                        </div>
                        <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] mr-6 p-4 w-80 h-70 rounded-xl">
                            <h1 className="text-start  font-bold text-2xl">Dounload your shows to watch offline</h1>
                            <p className="mt-3 text-m">Save your favorites easily and always have something to watch.</p>

                        </div>
                        <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] mr-6 p-4 w-80 h-70 rounded-xl">
                            <h1 className="text-start  font-bold text-2xl">Watch anywhere</h1>
                            <p className="mt-3 text-m">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

                        </div>
                        <div className="bg-gradient-to-br from-[#192145] via-[#1A1E3E] to-[#1E1324] w-80 p-4 h-70 rounded-xl">
                            <h1 className="text-start  font-bold text-2xl">Create profiles for kits</h1>
                            <p className="mt-3 text-m">Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>

                        </div>

                    </div>
                </div>
                <div className="text-center ">
                    <Faq/>

                </div>
                <p className="text-center mt-20">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="flex items-center mb-10 justify-center mt-5">

                    <input type="text" placeholder="Enter your mail" style={{ color: "black", }} className="bg-transparent border-2 pl-6 p-6 rounded-xl  border-gray-600 h-10 w-150" />
                    <button onClick={()=>{alert("Login first to continue")}}  className="text-white font-bold text-xl bg-red-600 w-50 h-13 rounded-sm ml-8">Get Started  </button>
                </div>
                <div className="ml-30">
                      <HomepageFooter />
                </div>
               


        </div>
    )
}

export default HomePageMoreReason;