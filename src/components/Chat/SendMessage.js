import React, {useState} from 'react';
import {UserAuth} from "../../context/AuthContext";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../config/firestore";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth()

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if(value.trim() === "") {
      alert("Enter valid message!")
      return
    }

    try {
      const {uid, displayName, photoURL} = currentUser
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error)
    }
    setValue("")
  }

  return (
    <div className="border-gray-100 fixed w-full bottom-0 py-10 sm:pl-64 shadow-large">
      <form onSubmit={handleSendMessage} className="containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="bg-gray-100" type="text"/>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default SendMessage;
