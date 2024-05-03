import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" style={{display:"none"}}/>
          <img src={Add} alt="" style={{display:"none"}}/>
          <img src={More} alt="" style={{display:"none"}}/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;