import React from "react";
import { Nav, ChatMembers, ChatWindow } from "../components";
import { UserAuth } from "../context/AuthContext";
import spacesLogo from "../img/SpacesLogo.png";

const LiveChat = () => {
   const { user, logout } = UserAuth();

   return (
      <div className="h-screen bg-hero-pattern">
         <div className="h-screen flex flex-col justify-center items-center">
            <img
               className="w-[231px] h-[78px] m-12"
               src={spacesLogo}
               alt="spaces"
            />
            <div className="bg-[#F0F0F0] text-lg drop-shadow-xl w-7/12 h-3/4 flex rounded-[38px] flex-col  overflow-hidden">
               <Nav />
               <div className="flex flex-row">
                  <div className="flex-1">
                     <ChatMembers />
                  </div>
                  <div className="flex-[2_2_0%]">
                     <ChatWindow />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LiveChat;
