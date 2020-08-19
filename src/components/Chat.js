import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, Link } from "react-router-dom";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

let socket;

const Chat = () => {
  const { search } = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const Endpoint = "http://localhost:8000";

  useEffect(() => {
    const { name, room } = queryString.parse(search);
    //const p=queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(Endpoint);
    console.log(socket);
    socket.emit("join", { name, room }, (err) => {
      if (err) alert(err);
    });

    socket.on("message", (message) => {
      setMessages((premessage) => [...premessage, message]);
    });


    return ()=>{
      socket.emit("disconnect");
      socket.close();
    }
  }, [Endpoint]);

  const handleMessage = (e) => {
    if (e.key == "Enter" && e.target.value) {
      socket.emit("message", e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="room"> {room}</div>
        <Link to="/">x</Link>
      </div>

      <div className="chat-box">
        <div className="chat-field">
          {" "}
          <ScrollToBottom className="messages">
            {messages.map((msg, ind) => (
              <div
                className={`message ${name == msg.user ? "self" : ""} `}
                key={ind}
              >
                {msg.user}:{msg.message}{" "}
              </div>
            ))}
          </ScrollToBottom>
        </div>{" "}
        <input placeholder="type Message" onKeyDown={handleMessage} />
      </div>
    </div>
  );
};

export default Chat;
