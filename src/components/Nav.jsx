import React from "react";

const Nav = () => {
   return (
      <div className="text-white bg-[#4D51D5] h-20 flex justify-between px-10 items-center">
         <div className="flex gap-5">
            <div>Room Name</div> <div>User</div>
         </div>
         <div>Logout</div>
      </div>
   );
};

export default Nav;
