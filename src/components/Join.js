import React, { useState } from "react";
import { Link } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join">
      <h1>Join</h1>
      <input
        type="text"
        className="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="room"
        placeholder="room name"
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link onClick={e=>(!name ||!room)? e.preventDefault(): null } 
      to={`/chat?name=${name}&room=${room}`}>
        <button type="submit">Log In</button>
      </Link>
    </div>
  );
};

export default Join;
