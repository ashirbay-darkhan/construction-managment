import React from 'react';
import {UserAuth} from "../../context/AuthContext";

const Message = ({ message }) => {
  const {currentUser} = UserAuth()

  console.log(message)
  return (
    <div class="flex-1 px-4 py-4 overflow-y-auto">
      <div className={`flex items-center mb-4 ${message.uid === currentUser.uid ? "flex-row-reverse" : ""}`}>
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10"
               src={message.avatar}/>
          <a href="#" className="block text-xs hover:underline">{message.name}</a>
        </div>
        <div className={`flex-1 ${message.uid === currentUser.uid ? "bg-indigo-100 text-gray-800" : "bg-indigo-400 text-white"}  p-2 rounded-lg mb-2 relative`}>
          <div>{message.text}</div>

          <div className={`absolute ${message.uid === currentUser.uid ? "right-0 translate-x-1/2 bg-indigo-100" : "left-0 -translate-x-1/2 bg-indigo-400"} top-1/2 transform rotate-45 w-2 h-2`}></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
