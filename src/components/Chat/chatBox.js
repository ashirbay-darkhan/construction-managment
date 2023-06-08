import React, {useEffect, useState} from 'react';
import Message from "./Message";
import {collection, orderBy, query, limit, where, onSnapshot, doc} from "firebase/firestore";
import {db} from "../../config/firestore";

const ChatBox = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages)
    });

    return () => unsubscribe;
  }, [])

  return (
    <div className="sm:pl-64 m-4 pl-4 pb-44 pt-20">
      {messages.map(message => (
        <Message key={message.id} message={message}/>
      ))}
    </div>
  );
};

export default ChatBox;
