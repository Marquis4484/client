import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import spacesLogo from "../img/SpacesLogo.png";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate;

   const { createUser } = UserAuth();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
         await createUser(email, password);
         navigate("/LiveChat");
      } catch (e) {
         setError(e.message);
         console.log(e.message);
      }
   };

   return (
      <div className="h-screen bg-hero-pattern">
         <div className="h-screen flex flex-col justify-center items-center">
            <img
               className="w-[231px] h-[78px] m-12"
               src={spacesLogo}
               alt="spaces"
            />
            <div className="bg-[#F0F0F0] flex flex-col items-center py-10 px-10 drop-shadow-xl rounded-[38px]">
               <p className=" items-center font-semibold text-xl">SignUp</p>
               <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="my-5">
                     <label className="block text-md font-medium text-gray-700">
                        Username
                     </label>
                     <input
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-2"
                        type="text"
                     />
                  </div>
                  <div className="my-5">
                     <label className="block text-md font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full py-2"
                        type="password"
                     />
                  </div>
                  <div className="my-5">
                     <label className="block text-md font-medium text-gray-700">
                        Profile Picture
                     </label>
                     <input className="w-full py-2" type="file" />
                  </div>
                  <button className="bg-[#007CE6] hover:bg-[#0954b6] my-5 rounded-[19.5px] px-20 text-white">
                     Signup
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

export default Signup;
