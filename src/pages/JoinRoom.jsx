import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import spacesLogo from "../img/SpacesLogo.png";

const JoinRoom = () => {
   return (
      <div className="h-screen bg-hero-pattern">
         <div className="h-screen flex flex-col justify-center items-center">
            <img
               className="w-[231px] h-[78px] m-12"
               src={spacesLogo}
               alt="spaces"
            />
            <div className="bg-[#F0F0F0] flex flex-col items-center py-10 px-10 shadow rounded-[38px]">
               <p className=" items-center font-semibold text-xl">
                  Join A Room
               </p>
               <form className="flex flex-col">
                  <div className="my-5">
                     <label className="block text-md font-medium text-gray-700">
                        Room Name
                     </label>
                     <input
                        placeholder="Enter a room name"
                        className="w-full py-2"
                        type="text"
                     />
                  </div>

                  <button className="bg-[#007CE6] hover:bg-[#0954b6] my-5 rounded-[19.5px] px-20 text-white">
                     Join Room
                  </button>
               </form>

               <p>
                  Already have an account?
                  <Link
                     to="/"
                     className="text-decoration-line: underline hover:text-[#0954b6] text-[#007CE6]"
                  >
                     Login.
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default JoinRoom;
