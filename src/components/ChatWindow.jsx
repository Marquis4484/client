import React from "react";

const ChatWindow = () => {
   return (
      <div className="grid place-items-center pt-5">
         <div className="w-[700px] h-[550px] bg-[#D9D9D9] grid place-items-center ">
            <div>Chat Window</div>
            <div className="w-[600px] h-[400px] bg-white"></div>
            <input type="text" className="bg-[#4D51D5] w-[600px]" />
         </div>
      </div>
   );
};

export default ChatWindow;
