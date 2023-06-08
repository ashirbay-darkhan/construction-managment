import React from 'react';
import ChatBox from "./chatBox";
import SendMessage from "./SendMessage";

const Chat = () => {
  return (
    <div className="pt-4 mt-16 ">
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default Chat;
