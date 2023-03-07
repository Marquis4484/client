import React, { useState } from "react";
import io from "socket.io-client";
import "../App.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import JoinRoom from "../pages/JoinRoom";
import LiveChat from "../pages/LiveChat";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

const socket = io.connect("http://localhost:5000"); // connecting backend

const App = () => {
   const [username, setUsername] = useState("");
   const [room, setRoom] = useState("");
   const [showChat, setShowChat] = useState(false);

   const joinRoom = () => {
      if (username !== "" && room !== "") {
         socket.emit("join_room", room); //
         setShowChat(true);
      }
   };

   return (
      <div className="h-screen">
         {/* {!showChat ? (
            <div className="joinChatContainer">
               <h3>Join A Chat</h3>
               <input
                  type="text"
                  placeholder="name"
                  onChange={(event) => {
                     setUsername(event.target.value);
                  }}
               />
               <input
                  placeholder="room"
                  type="text"
                  onChange={(event) => {
                     setRoom(event.target.value);
                  }}
               />
               <button onClick={joinRoom}>Join A Room</button>
            </div>
         ) : (
            <Chat socket={socket} username={username} room={room} />
         )} */}
         <AuthContextProvider>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/join_room" element={<JoinRoom />} />
               <Route path="/live_chat" element={<LiveChat />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
};

export default App;
