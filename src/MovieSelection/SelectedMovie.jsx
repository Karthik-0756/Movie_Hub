import axios from "axios";
import React, { useEffect, useState } from "react";
import { href, useNavigate, useParams } from "react-router-dom";
import ActionMovies from "../landingPage/ActionMovies";
import AdventureMovie from "../landingPage/AdventureMovie";
import ComedyMovies from "../landingPage/ComedyMovies";
import HomePageTrending from "../components/HomePageTrending";

const SelectedMovie = () => {
    const [videoKey, setVideoKey] = useState("");
    const [movie, setMovie] = useState([]);
    const [viewTrailer, setViewTrailer] = useState(false);
    const { id } = useParams();
    const KeyApi = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=941d5693ffe3ad457206af43b7ca3d00`;
    const MovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=941d5693ffe3ad457206af43b7ca3d00`;

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(MovieApi);
            const res = response.data
            // console.log(res.results[0].key)
            console.log(res)
            // setVideoKey(res.results[0].key)
            setMovie(res)
        }
        fetchMovie();

        const fetchKey = async () => {
            const response = await axios.get(KeyApi);
            const res = response.data;
            console.log(res.results[0].key)
            setVideoKey(res.results[0].key)

        }
        fetchKey();
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }

        )


    }, [id])

    const bgImage = `https://image.tmdb.org/t/p/w500${movie.poster_path || movie.poster_path}`
    const MovetoTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }

        )

    }
    const handleTrailer = () => {
        console.log("cliked")
        setViewTrailer(true);
        // window.scrollTo({

        // })

    }
    const languageMap = {
        en: "English",
        ta: "Tamil",
        ja: "Japanese",
        es: "Spanish",
        zh: "Chinese", // ⚠️ correct code (not "cn")
        fr: "French",
        da: "Danish",
        te: "Telugu",
    };


    return (
        <div className="bg-black text-white  overflow-x-hidden  ">

            {/* <div className=" h-screen w-full bg-black">



                <div
                    className="pl-2  absolute inset-0 bg-cover bg-center transition-opacity duration-500 "
                    style={{
                        backgroundImage: ` url(${bgImage})`,

                    }}
                >

                    <div className="text-white mt-50 ml-2 pl-10">
                        <p className="text-6xl font-bold text-red-600 uppercase">{movie.title}</p>

                        <div className="flex">

                            <img className="w-10 h-5 mt-11 ml-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAADKCAMAAABuU+yDAAAApVBMVEX2xwAAAAD3yhX7ywD/////zwDHoQDKpADftQCzkgB9ZQDRqADNpgC2kwCykAB6YgBGOQD/1QChggB1XgAZFADlugC+mQATDwCRdQCDagBLPQBZSACIbgDsvwCcfgBvWgBANAAsJABoVAAjHABgTgAzKQD3zSn52W375Z4eGAA5LgCqiQAJBwD98cv535D40j742nz87bv+/fP+9+D41Vf41Ez86KsqvPosAAAKx0lEQVR4nO2dZ2PiOBCG7cgmvgApEAMJMTVlScjuhuzd//9pR3ERIGskVs143o+Jxpb0YJXRSPICWp8/f3kos3r9/bXK6t8rUKx+vtrOWV319n1I44ftLNVav1c0je8/tvNTc71+FjQ+L2znBvVfRgNhuKAfOxrf2H07oa8NjRUOa13RmsZv23lAZVp3GrazgMoVBP/azgIqF34aLil4s50DVKEVTjUcEjZULgmdhS4Juw2XhPNwl4SduEtCGigUCoVCoVAoFAqFQqFQKBQKhUKhUCgU6txFuLKdO0nxC8Mp10mGsi+BlbR7HLWj02tGmUjIV5EyaVyKqXXwikTQ7rKRFEYx523NtaIoihMvy6UIHHLpc3XtwNfRGHV4GuUVRBr8wlDa/5WRD2HDRl4h5Fog+bJ/v5i/D7uDzkcj2qDh1idp8Z/mAA1yA5Q4r1kJGr29coUdYcPLgsY/wkY7LReP41HLuyuv0irQuAJKeQqNj30aXWHDv6Cx03zYjstarbrSGOyV6+5d2PCvaaw1v2qyW6y60pjtveKuL2yogsbm/RGrYutK43H/HcJ2qmj4y4F3XLV1pTGP6TdEwnbKaPj+8PjzqCsNv0kVTMZOHQ1/2jys3NrSaNA0RGYOqRTS8KeHX0dtaQyoKXz4IG6nkoY/TQ6KWlcaXZrGTNxOKQ3/Odwval1pDKk3hI/idmpp+J09HLWlsddITMXtFNPw99qq2tLwqSFuLGGmmgbdYtaYRqsomcR0QzmNvY+jvjQKvyHpSZgpp/FEfRz1pTHKayEcSZgppzGli1pbGld5ycKBhJlyGj41BawvjWKIKzPd0EBjhDR8f5J3n+FUwkw9jXHRcdSXxjw3CyWsZGjcDocTgWWsOdLw6Xo9zQqk0V4nTZrXE+iRSMMvAhVIU8ZKkoZHiAdFWRQzjhrT6GQ0ZKYb0jTW6bxbfrpimaPGNDKfBBEP3/FPoeGFQLRWA2msh7gpjRBqSfZ0Ag0S3QulqzWNSWol408/iYaXTLnprpGG7/dTu/BFxuokGvxhVQdp+LlLIhEPpvJPo+ENuekGp9Mwv5NAG420tmT86afRIM/cdA8n0dhQSKLmNhg+MYdEG41doILcdOMkGoAjrCtPg4SkMZrdTtO/z29nnZJg0srQuNnRaEsZnUSDH3Q9k6VBvMb4+J/9p8jAB6KNxs6LK+VP10LjWY4GCdtl3q9ZtB+DUiUaL1uXhNx0QweNoRSNMOKNyFnRvdWgsYvFDfld7KFOosEHPsx/0AI0oIn9Y6IXhzYaqUtiLmWjgcajOI3QA8MiJ7FWHPpo7DpFORurNNqE0XsfPU4nDI00toEKiZyN3W9DqI8b6OzK9dHYDC1lbazSENsQtzzaiVAJGrcbGoxeccmxsUpDULNK0njx2NONKcemCjR8jR+HIhrL41/8cm3J6Bf7vLU6HTSE5xuiutLXcyiiMWWMZFvEI8dVP+e5lTTQuFVO43CXjns0hoxf/HqIS44hvT9xHlMJGhr7cUU0ZoxFhqeQtVtgyPNcVYKGxmUpRTTGDGfRLGT5068q/21QId+O0ugyItEfmSbX1aehbwKoiMYVYxvyPGZNN3o8X5BlGv3Zw8N4AaVyn8YN45/9iLU5uekujWm0OXcsAfe3P7jeb3RZDqkGa5GU6ye1S6Ox+82H0Orx2HkaHiPGrBMej7SW3M38Vmm8ZPMIaFFGn29E1ZiKMc/zB4zVjYm7NPIdQATYHPesC4YyGnesIS6j+ereOUsjjy6BPHL02QSO0mBU8jtj8vfkLo18/ywUdvTofEt1xxjMvjDCdzru0igGrsCBA+7TYA1EFowhVcPdfqOYYgMrlhWgwQjxXDIcu8w5SC6rND6KlRB+Qn1r48poAIH7qe7jKtAAdo7euk8DCBVP9c4/PMwujTzlHT9hBWgQoV36w9BdGtdnQ6MbEqGI267DNP45JxpC0egjh2mc1bchFFLSI0jDBA2xXUxNpGGGhkgAdD92eEx1XjSAQw02mhKkYYYGEbhmY4I0DNEQ2VS2niQiDSM0RK5nGiENUzQEBlUfSMMQDZGdMz3sN4zRAIe49xFw5QDSAEotToOAXtzNPlmkYYgGOMTdFANpGKIBngo9C5GGMRrgEYabXUGhs1HRZ0YDPG9nhDSM0YC9uJvjFZCGIRpkCjyriTQM0gC8uJvpBtIwRgMY4r57SMMgDeAk4u1GeqRhigYQqDBGGiZpAIOqEdIwSAOKX91WoHoa/N4KaZSogTSM0uB6cRfbR5mmIX7qy7nR4F+XnJ4CqpwG//w7ibPbzowG34u72/agnAYQjl1jGtzoz902a+U0PP5+4hrT4A5xd7sc1dPgLznWlwZ/+2JHDw3g/o0a0yC8u096eloqYIub+FnR57R/Y5uGey/Q7knKacT8UBWpk7sz8RNWhgZn7L+ItdAgLd6RrjJ3DBS7MKu+QzlrqThe3ImnhwZwgNFYmEZHdPe+8ydb3KQ0OIEKaZOhnAYQjC1+N02xex/wflaFBq8cYz00POCmWPF7m/KTLaBwC+fP4MlocPa9pz897sYCeRrQjRnUBeMQjYecxiU/ofPnU2U0OGPD9IpQhTQ2V4198PtwmdsXhU9EuqoKDc4Qt6WWxnUSNxsD8ELr/DJnmEZ+fAi0E8X9UyYzGqW9wn12OaYiGtMXsWtvxG/tzU/k5ruiK0SjfIg7SdTSEFVUFBU8ZTJ9O3S3rfOnE+c0Soe4WTtgmkbRxoM0htsry0gIXcLt/MndGY3yiVM2CzNNo/gdw6cTD1tJEn+A21AuK0Oj1KkwsEPjWYaGmPpF4+c6jdLJWOYFMkxjoJ6G+/dv5DRKT/bt2fk2GhL9hqCG2jpx9TTKnpc9xzAN6nesisZTdWiUzZwW+WDeKI0ZVXOqaOjrxNXTKEk1yR5jlgbVUKmiobHbUN+Ll3hxc0+bURoTulFRRONJ36ehnkbJKmbRsZikQX8aimgsoirRuGO7j0Y2aOzfzAfREDq0lFohrAQN9lS2YaGlOogmgGjEUFVspG/dTwuNktqOzNM4vAscoDEkHnzeWTXuFy9osKMGlvljjNF4Pqw4gMbGdQPd9v6us9PQQoOZbJIPCw3RWA68w4oDaGzaUuBwjkfNMDSMqSLW2mjR3JqhMWsed7Z8GtNtuFfY49wyfpNohqHsvj+q8Iz7tKioJgM0Ft3m0YfhQTTS3wtJyrYRTnu6WWihwVo5G5mi0Z9020nIrLc1jX6pihyG0bh//NyXEQuwaqmNNdyWhrXXiIrcEKQB3oGYa9m/Xyymt883o851M/bYKLaKOSr8HSSMP2Z7H3h/1vN0TjOKVz/49zxR68pJs1zUAgyJGP+nfDtx+VNadLIW53X0m6NkXX+piKLf7/qBUW90MxsOn8dP7SbhEFarhK+YzmO59svC/7/gYzjJSt+sUsoRo1AoFAqFQqFQKBQKhUKhUCgUCoVCoVCo6urCdgZQlJCGS/rXdgZQlH7bzgCK0n+2M4Ci9G07AyhKwavtHKAKBT9t5wBVKMCmyiEFAY6q3FEQrHAC6IyCIMBBrjNa0wjebGcCtdWvLY3VH9v5QK118b2lEazQW2VfF9/BjkawwsbKtl6/g4xGEPywnZua620VUDSCb+w87On1a8ugoBEEn9hc2dGfr5QATWPdfXz+ePt1gTKn1z8/v1Z5/f8PXdgsd+Tf2JUAAAAASUVORK5CYII=" alt="" />
                            <p className="ml-1 mt-10">Rating: {movie.vote_average}⭐</p>
                        </div>
                        <div className="mt-10 ml-5">
                            <button className="w-30 h-10 bg-red-800 text-white text-center rounded-2xl ">Play</button>
                            <button className="ml-5 w-30 h-10 bg-white text-black text-center rounded-2xl ">Watch Trailer</button>
                        </div>


                    </div>



                </div>


            </div>
            <div onClick={MovetoTop} className="mx-40 mt-20 text-white">
                <HomePageTrending />
                <ActionMovies />
                <AdventureMovie />
                <ComedyMovies />
            </div> */}
            <div className=" mx-4 md:mx-40 pt-5 md:pt-30 pb-10 md:pb-30">

                <div className="md:flex  ">
                    <div>
                        <img className="md:h-130 h-100  w-full md:mt-20  rounded-2xl" src={bgImage} alt="" />

                    </div>
                    <div className="md:pl-30 mt-5">
                        <h1 className="md:text-5xl text-3xl uppercase font-bold">Title : {movie.title}</h1>
                        <div className="flex mt-5 md:mt-15">
                            {movie.genres?.map((genres) => (
                                <p className="md:w-35 h-10 rounded bg-gray-900 p-2 mr-5 text-white text-center" key={genres.id}>{genres.name}</p>
                            ))}
                        </div>
                        <div className="md:flex   ">
                            <div className="flex">
                                <img className="w-10 h-5 mt-11 " src="data:image/png;base64,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" alt="" />
                                <p className="ml-1 mt-10">Rating: {movie.vote_average}⭐</p>
                            </div>
                            <div className="mt-10 md:ml-20 flex">
                                <p className="mr-2">Language :  </p>
                                {languageMap[movie.original_language || "unknown"]}
                             
                                
                            </div>

                        </div>

                        <h1 className="mt-10 text-2xl  uppercase">Overview</h1>
                        <p className="md:w-80 w-70 mt-4 font-light">{movie.overview}</p>

                        <a href="#trailer"><button onClick={handleTrailer} className="w-50 h-10 bg-white text-black rounded-2xl mt-10 font-bold cursor-pointer scroll-smooth  ">View Trailer</button>
                        </a>
                    </div>

                </div>
                {viewTrailer && (
                    <>
                        <h1 id="trailer" className="text-4xl underline mt-10 ">TRAILER</h1>
                        <iframe className="md:w-300 w-90  md:h-150 mt-10  pb-10 " src={`https://www.youtube.com/embed/${videoKey}`} frameborder="0"></iframe>


                        {/* <div className="w-150  bg-gray-200 ml-70 mb-30 ">
                            <div className="flex justify-between">
                                <p>Name</p>
                                <p className="text-4xl">|</p>
                                <p>{movie.title}</p>
                            </div>
                        </div> */}
                    </>

                )}

            </div>


        </div>

    )
}

export default SelectedMovie;