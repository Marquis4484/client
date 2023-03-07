import React from "react";
import { Link } from "react-router-dom";
import spacesLogo from "../img/SpacesLogo.png";

const Login = () => {
   return (
      <div className="h-screen bg-hero-pattern">
         <div className="h-screen flex flex-col justify-center items-center">
            <img
               className="w-[231px] h-[78px] m-12"
               src={spacesLogo}
               alt="spaces"
            />
            <div className="bg-[#F0F0F0] flex flex-col items-center py-10 px-12 drop-shadow-xl rounded-[38px]">
               <div className=" items-center font-semibold text-xl">Login</div>
               <form classroom="p-24">
                  <div className="my-5 ">
                     <label className="block text-md font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        placeholder="Enter your Email"
                        className="w-full py-2"
                        type="email"
                     />
                  </div>
                  <div className="my-5">
                     <label className="block text-md font-medium text-gray-700">
                        Password
                     </label>
                     <input
                        placeholder="Enter your password"
                        className="w-full py-2"
                        type="email"
                     />
                  </div>
               </form>
               <button className="bg-[#007CE6] hover:bg-[#0954b6] my-5 rounded-[19.5px] px-20 text-white">
                  Login
               </button>
               <p>
                  Don't have an account?
                  <Link
                     to="/signup"
                     className="text-decoration-line: underline text-[#007CE6] hover:text-[#0954b6]"
                  >
                     Signup.
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
