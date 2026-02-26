import React from "react";
const HomepageFooter = () => {
    return (
        <div className="ml-30 mr-20 ">
            <footer >
                <p className="underline">Questions? Contact us.</p>
                <div className="flex mt-8" >
                    <div className="flex ">
                        <div className=" flex flex-col  mr-50  ">
                            <a className="mb-2 underline" href="">FAQ</a>
                            <a className="mb-2 underline" href="">Investor Relations</a>
                            <a className="mb-2 underline" href="">Buy Gift Cards</a>
                            <a className="mb-2 underline" href="">Cookie Preferences</a>
                            <a className="mb-2 underline" href="">Legal Guarantee</a>
                        </div>
                        <div className=" flex flex-col mr-50 " >
                            <a className="mb-2 underline" href="">Help Center</a>
                            <a className="mb-2 underline" href="">Jobs</a>
                            <a className="mb-2 underline" href="">Ways to Watch</a>
                            <a className="mb-2 underline" href="">Corporate Information</a>
                            <a className="mb-2 underline" href="">Legal Notices</a>
                        </div>
                        <div className=" flex flex-col mr-50 " >
                            <a className="mb-2 underline" href="">Account</a>
                            <a className="mb-2 underline" href="">Netflix Shop</a>
                            <a className="mb-2 underline" href="">Terms of Use</a>
                            <a className="mb-2 underline" href="">Contact Us</a>
                            <a className="mb-2 underline" href="">Only on Netflix</a>
                        </div>
                        <div className=" flex flex-col mr-50 " >
                            <a className="mb-2 underline" href="">Media Center</a>
                            <a className="mb-2 underline" href="">Redeem Gift </a>
                            <a className="mb-2 underline" href="">Privacy</a>
                            <a className="mb-2 underline" href="">Speed Test</a>
                            <a className="mb-2 underline" href="">Ad Choices</a>
                        </div>
                    </div>
                </div>
                
                <select className="mt-5 w-30 h-10 text-center   border rotate-1" name="" id="">
                    <option value="">English</option>
                    <option value="">Franch</option>
                </select>
                <h5 className="mt-5">Netflix France</h5>
                <p className="mt-5 mb-20"> This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

            </footer>

        </div>
    )
}
export default HomepageFooter;